<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MailSetting;
use App\Models\MailLog;
use App\Mail\AdminComposeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailerController extends Controller
{
    /**
     * Display mail settings.
     */
    public function settings()
    {
        $settings = MailSetting::first() ?? new MailSetting();
        return view('admin.mailer.settings', compact('settings'));
    }

    /**
     * Update mail settings.
     */
    public function updateSettings(Request $request)
    {
        $request->validate([
            'mail_transport' => 'required|string',
            'mail_host' => 'required|string',
            'mail_port' => 'required|integer',
            'mail_username' => 'nullable|string',
            'mail_password' => 'nullable|string',
            'mail_encryption' => 'nullable|string',
            'mail_from_address' => 'required|email',
            'mail_from_name' => 'required|string',
        ]);

        $settings = MailSetting::first() ?? new MailSetting();
        $settings->fill($request->all());
        $settings->save();

        return redirect()->back()->with('success', 'Mail settings updated successfully');
    }

    /**
     * Show email composer.
     */
    public function compose()
    {
        return view('admin.mailer.compose');
    }

    /**
     * Send email logic.
     */
    public function send(Request $request)
    {
        $request->validate([
            'to' => 'required|string', // Support comma separated
            'subject' => 'required|string',
            'message' => 'required|string',
            'attachments.*' => 'nullable|file',
        ]);

        $recipients = array_map('trim', explode(',', $request->to));
        $subject = $request->subject;
        $messageBody = $request->message;
        
        $attachments = [];
        if ($request->hasFile('attachments')) {
            foreach ($request->file('attachments') as $file) {
                $attachments[] = [
                    'path' => $file->getRealPath(),
                    'as' => $file->getClientOriginalName(),
                    'mime' => $file->getMimeType(),
                ];
            }
        }

        try {
            foreach ($recipients as $recipient) {
                if (filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
                    Mail::to($recipient)->send(new AdminComposeMail($subject, $messageBody, $attachments));
                    
                    MailLog::create([
                        'recipient' => $recipient,
                        'subject' => $subject,
                        'status' => 'sent',
                    ]);
                }
            }
            return redirect()->back()->with('success', 'Email(s) sent successfully');
        } catch (\Exception $e) {
            MailLog::create([
                'recipient' => $request->to,
                'subject' => $subject,
                'status' => 'failed',
                'error' => $e->getMessage(),
            ]);
            return redirect()->back()->with('error', 'Mail sending failed: ' . $e->getMessage());
        }
    }

    /**
     * Test mail connection.
     */
    public function testConnection(Request $request)
    {
        $request->validate([
            'mail_transport' => 'required',
            'mail_host' => 'required',
            'mail_port' => 'required',
            'mail_from_address' => 'required|email',
        ]);

        try {
            // Temporary config override for THIS request only
            config([
                'mail.mailers.smtp.transport' => $request->mail_transport,
                'mail.mailers.smtp.host' => $request->mail_host,
                'mail.mailers.smtp.port' => $request->mail_port,
                'mail.mailers.smtp.encryption' => $request->mail_encryption,
                'mail.mailers.smtp.username' => $request->mail_username,
                'mail.mailers.smtp.password' => $request->mail_password,
                'mail.from.address' => $request->mail_from_address,
                'mail.from.name' => 'Connection Test',
            ]);

            Mail::to($request->mail_from_address)->send(new AdminComposeMail("Connection Test", "If you receive this, your SMTP settings are working!"));
            
            return response()->json(['success' => true, 'message' => 'Connection successful! Test email has been sent to ' . $request->mail_from_address]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Connection failed: ' . $e->getMessage()]);
        }
    }

    /**
     * List mail logs.
     */
    public function logs()
    {
        $logs = MailLog::orderBy('created_at', 'desc')->paginate(20);
        return view('admin.mailer.logs', compact('logs'));
    }
}
