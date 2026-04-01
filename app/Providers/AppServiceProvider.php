<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (app()->runningInConsole() === false || strpos(implode(' ', $_SERVER['argv']), 'migrate') === false) {
            try {
                if (\Schema::hasTable('mail_settings')) {
                    $mailSetting = \App\Models\MailSetting::first();
                    if ($mailSetting) {
                        $config = [
                            'transport' => $mailSetting->mail_transport,
                            'host'      => $mailSetting->mail_host,
                            'port'      => $mailSetting->mail_port,
                            'encryption'=> $mailSetting->mail_encryption,
                            'username'  => $mailSetting->mail_username,
                            'password'  => $mailSetting->mail_password,
                            'timeout'   => null,
                        ];
                        
                        config(['mail.mailers.smtp' => array_merge(config('mail.mailers.smtp'), $config)]);
                        config(['mail.from.address' => $mailSetting->mail_from_address]);
                        config(['mail.from.name'    => $mailSetting->mail_from_name]);

                        // FORCE RELOAD THE MAILER (Solves delivery issues)
                        app()->forget('mailer');
                        app()->instance('mailer', app()->make('mail.manager')->mailer());
                    }
                }
            } catch (\Exception $e) {
                // Fail silently or log error
            }
        }
    }
}
