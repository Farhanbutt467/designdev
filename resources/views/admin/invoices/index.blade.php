@extends('admin.layouts.admin')

@section('title', 'Invoice List')

@section('vendor-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css') }}" />
@endsection

@section('content')
<!-- Invoice List Table -->
<div class="card">
  <div class="card-datatable table-responsive">
    <table class="invoice-list-table table border-top" id="invoiceListTable">
      <thead>
        <tr>
          <th>#ID</th>
          <th><i class="ti ti-trending-up"></i></th>
          <th>Client</th>
          <th>Total</th>
          <th class="text-nowrap">Issued Date</th>
          <th>Balance</th>
          <th>Invoice Status</th>
          <th class="cell-fit">Actions</th>
        </tr>
      </thead>
      <tbody>
        @foreach($invoices as $invoice)
        <tr>
          <td><a href="{{ route('admin.invoices.show', $invoice->id) }}">#{{ $invoice->invoice_number }}</a></td>
          <td>
            @php
                $statusIcon = match($invoice->status) {
                    'paid' => '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30"><i class="ti ti-circle-check ti-xs"></i></span>',
                    'unpaid' => '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30"><i class="ti ti-clock ti-xs"></i></span>',
                    'cancelled' => '<span class="badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30"><i class="ti ti-x ti-xs"></i></span>',
                    default => '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30"><i class="ti ti-info-circle ti-xs"></i></span>',
                };
            @endphp
            {!! $statusIcon !!}
          </td>
          <td>
            <div class="d-flex justify-content-start align-items-center">
              <div class="d-flex flex-column">
                <a href="{{ route('admin.invoices.show', $invoice->id) }}" class="text-heading text-truncate fw-medium">{{ $invoice->customer_name }}</a>
                <small class="text-truncate text-muted">{{ $invoice->customer_email }}</small>
              </div>
            </div>
          </td>
          <td>${{ number_format($invoice->total, 2) }}</td>
          <td>{{ $invoice->created_at->format('d M Y') }}</td>
          <td>
            @if($invoice->status == 'paid')
                <span class="badge bg-label-success" text-capitalized> Paid </span>
            @else
                <span class="text-heading">${{ number_format($invoice->total, 2) }}</span>
            @endif
          </td>
          <td>
             <span class="d-none">{{ $invoice->status }}</span>
             @php
                $statusBadge = match($invoice->status) {
                    'paid' => 'bg-label-success',
                    'unpaid' => 'bg-label-warning',
                    'cancelled' => 'bg-label-danger',
                    default => 'bg-label-secondary',
                };
             @endphp
             <span class="badge {{ $statusBadge }}" text-capitalized> {{ ucfirst($invoice->status) }} </span>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <a href="{{ route('admin.invoices.show', $invoice->id) }}" class="btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill" data-bs-toggle="tooltip" title="View"><i class="ti ti-eye ti-md"></i></a>
              <div class="dropdown">
                <a href="javascript:;" class="btn dropdown-toggle hide-arrow btn btn-icon btn-text-secondary waves-effect waves-light rounded-pill p-0" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-md"></i></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a href="{{ route('admin.invoices.pdf', $invoice->id) }}" class="dropdown-item"><i class="ti ti-download me-2"></i>Download</a>
                  <a href="{{ route('admin.invoices.show', $invoice->id) }}" class="dropdown-item"><i class="ti ti-edit me-2"></i>Edit</a>
                  <a href="javascript:;" class="dropdown-item"><i class="ti ti-copy me-2"></i>Duplicate</a>
                  <div class="dropdown-divider"></div>
                  <form action="{{ route('admin.invoices.destroy', $invoice->id) }}" method="POST">
                      @csrf
                      @method('DELETE')
                      <button type="button" class="dropdown-item delete-confirm text-danger"><i class="ti ti-trash me-2"></i>Delete</button>
                  </form>
                </div>
              </div>
            </div>
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
  <div class="card-footer px-4 border-top">
      {{ $invoices->links() }}
  </div>
</div>
@endsection

@section('vendor-js')
    <script src="{{ asset('admin-assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('admin-assets/vendor/libs/moment/moment.js') }}"></script>
@endsection

@section('page-js')
    <script>
        $(function () {
            var dt_invoice_table = $('#invoiceListTable');
            if (dt_invoice_table.length) {
                var dt_invoice = dt_invoice_table.DataTable({
                    dom: '<"row mx-1"' +
                    '<"col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start gap-2"l<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start">>'+
                    '<"col-12 col-md-6 d-flex align-items-center justify-content-end flex-column flex-md-row pe-5 gap-md-4 mt-0 mt-md-0"f>' +
                    '>t' +
                    '<"row mx-1"' +
                    '<"col-sm-12 col-md-6"i>' +
                    '<"col-sm-12 col-md-6"p>' +
                    '>',
                    language: {
                        sLengthMenu: 'Show _MENU_',
                        search: '',
                        searchPlaceholder: 'Search Invoice',
                        paginate: {
                            next: '<i class="ti ti-chevron-right ti-sm"></i>',
                            previous: '<i class="ti ti-chevron-left ti-sm"></i>'
                        }
                    },
                    paging: false,
                    info: false,
                    order: [[0, 'desc']]
                });
                
                // Add "Create Invoice" button to the header
                $('.dt-action-buttons').html('<a href="{{ route('admin.invoices.create') }}" class="btn btn-primary waves-effect waves-light"><i class="ti ti-plus ti-xs me-md-2"></i><span class="d-md-inline-block d-none">Create Invoice</span></a>');
            }
            
            // Tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    </script>
@endsection
