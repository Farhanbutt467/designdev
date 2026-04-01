@extends('admin.layouts.admin')

@section('title', 'Email Logs')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <h5 class="card-header d-flex justify-content-between align-items-center">
                <span>Email History</span>
                <a href="{{ route('admin.mailer.compose') }}" class="btn btn-primary d-flex align-items-center">
                    <i class="ti ti-plus me-1"></i> Compose New
                </a>
            </h5>
            <div class="table-responsive text-nowrap">
                <table class="table border-top table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>To</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Sent At</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        @forelse($logs as $log)
                        <tr>
                            <td>{{ $log->id }}</td>
                            <td>{{ $log->recipient }}</td>
                            <td>{{ $log->subject }}</td>
                            <td>
                                @if($log->status == 'sent')
                                    <span class="badge bg-label-success">Sent</span>
                                @else
                                    <span class="badge bg-label-danger" data-bs-toggle="tooltip" title="{{ $log->error }}">Failed</span>
                                @endif
                            </td>
                            <td>{{ $log->created_at->format('M d, Y H:i:s') }}</td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="5" class="text-center">No logs found.</td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                {{ $logs->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

@section('page-js')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
</script>
@endsection
