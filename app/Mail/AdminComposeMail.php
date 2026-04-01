<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Queue\SerializesModels;

class AdminComposeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;
    public $mailMessage;
    public $attachments;

    /**
     * Create a new message instance.
     */
    public function __construct($subject, $mailMessage, $attachments = [])
    {
        $this->subject = $subject;
        $this->mailMessage = $mailMessage;
        $this->attachments = $attachments;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'admin.mailer.template',
        );
    }

    /**
     * Get the attachments for the message.
     */
    public function attachments(): array
    {
        $mailAttachments = [];
        foreach ($this->attachments as $attachment) {
            $mailAttachments[] = Attachment::fromPath($attachment['path'])
                ->as($attachment['as'])
                ->withMime($attachment['mime']);
        }
        return $mailAttachments;
    }
}
