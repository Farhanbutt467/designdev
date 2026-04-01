@extends('admin.layouts.admin')

@section('title', 'Mail Configuration')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card mb-4">
            <h5 class="card-header">SMTP Settings</h5>
            <div class="card-body">
                <form action="{{ route('admin.mailer.settings.update') }}" method="POST">
                    @csrf
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label class="form-label" for="mail_transport">Mail Driver</label>
                            <select name="mail_transport" id="mail_transport" class="form-select">
                                <option value="smtp" {{ $settings->mail_transport == 'smtp' ? 'selected' : '' }}>SMTP</option>
                                <option value="sendmail" {{ $settings->mail_transport == 'sendmail' ? 'selected' : '' }}>Sendmail</option>
                                <option value="log" {{ $settings->mail_transport == 'log' ? 'selected' : '' }}>Log (Testing)</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label" for="mail_host">Mail Host</label>
                            <input type="text" id="mail_host" name="mail_host" class="form-control" value="{{ $settings->mail_host }}" placeholder="smtp.mailtrap.io" />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label" for="mail_port">Mail Port</label>
                            <input type="number" id="mail_port" name="mail_port" class="form-control" value="{{ $settings->mail_port }}" placeholder="2525" />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label" for="mail_encryption">Encryption</label>
                            <select name="mail_encryption" id="mail_encryption" class="form-select">
                                <option value="" {{ $settings->mail_encryption == '' ? 'selected' : '' }}>None</option>
                                <option value="tls" {{ $settings->mail_encryption == 'tls' ? 'selected' : '' }}>TLS (Port 587)</option>
                                <option value="ssl" {{ $settings->mail_encryption == 'ssl' ? 'selected' : '' }}>SSL (Port 465)</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label" for="mail_username">Username</label>
                            <input type="text" id="mail_username" name="mail_username" class="form-control" value="{{ $settings->mail_username }}" />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label" for="mail_password">Password</label>
                            <input type="password" id="mail_password" name="mail_password" class="form-control" value="{{ $settings->mail_password }}" />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label" for="mail_from_address">From Email</label>
                            <input type="email" id="mail_from_address" name="mail_from_address" class="form-control" value="{{ $settings->mail_from_address }}" placeholder="info@example.com" />
                        </div>
                        <div class="col-md-12">
                            <label class="form-label" for="mail_from_name">From Name</label>
                            <input type="text" id="mail_from_name" name="mail_from_name" class="form-control" value="{{ $settings->mail_from_name }}" placeholder="DesignDev Admin" />
                        </div>
                    </div>
                    <div class="pt-4">
                        <button type="submit" class="btn btn-primary me-sm-3 me-1">Save Configuration</button>
                        <button type="button" id="testConnectionBtn" class="btn btn-label-info">Test Connection</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('page-js')
<script>
    $('#testConnectionBtn').on('click', function() {
        const $btn = $(this);
        const originalText = $btn.html();
        
        $btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-1" role="status"></span> Testing...');

        $.ajax({
            url: "{{ route('admin.mailer.test-connection') }}",
            method: 'POST',
            data: $('form').serialize(),
            success: function(response) {
                $btn.prop('disabled', false).html(originalText);
                if (response.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: response.message,
                        customClass: { confirmButton: 'btn btn-success' }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Connection Failed',
                        text: response.message,
                        customClass: { confirmButton: 'btn btn-danger' }
                    });
                }
            },
            error: function(xhr) {
                $btn.prop('disabled', false).html(originalText);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while testing the connection: ' + xhr.responseText,
                    customClass: { confirmButton: 'btn btn-danger' }
                });
            }
        });
    });
</script>
@endsection
