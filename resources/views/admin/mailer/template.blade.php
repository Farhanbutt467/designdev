<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
        .header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px; }
        .content { margin-bottom: 20px; white-space: pre-wrap; }
        .footer { font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>DesignDev Notification</h2>
        </div>
        <div class="content">
            {!! $mailMessage !!}
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} DesignDev. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
