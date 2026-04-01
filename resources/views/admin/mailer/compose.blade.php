@extends('admin.layouts.admin')

@section('title', 'Send Email')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card mb-4">
            <h5 class="card-header">Compose New Email</h5>
            <div class="card-body">
                <form action="{{ route('admin.mailer.send') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row g-3">
                        <div class="col-md-12">
                            <label class="form-label" for="to">Recipient Email(s)</label>
                            <input type="text" id="to" name="to" class="form-control" placeholder="example1@mail.com, example2@mail.com" required />
                            <small class="text-muted">You can enter multiple emails separated by commas.</small>
                        </div>
                        <div class="col-md-12">
                            <label class="form-label" for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter subject" required />
                        </div>
                        <div class="col-md-12">
                            <label class="form-label" for="message">Message Body</label>
                            <textarea id="message" name="message" class="form-control" rows="10" placeholder="Write your message here..." required></textarea>
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label" for="attachments">Attachments</label>
                            <input type="file" id="attachments" name="attachments[]" class="form-control" multiple />
                        </div>
                    </div>
                    <div class="pt-4">
                        <button type="submit" class="btn btn-primary d-flex align-items-center">
                            <i class="ti ti-send me-1"></i> Send Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
