@extends('admin.layouts.admin')

@section('title', 'Invoice Preview')

@section('page-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/css/pages/app-invoice.css') }}" />
@endsection

@section('content')
<div class="row invoice-preview">
  <!-- Invoice -->
  <div class="col-xl-9 col-lg-8 col-12 mb-md-0 mb-4">
    <div class="card invoice-preview-card">
      <div class="card-body">
        <div class="d-flex justify-content-between flex-column flex-sm-row px-sm-4 px-0">
          <div class="mb-sm-0 mb-4">
            <div class="d-flex svg-illustration mb-3 gap-2 align-items-center">
              <span class="app-brand-text fw-bold fs-4">DesignDev</span>
            </div>
            <p class="mb-1">Office 149, 450 South Brand Blvd</p>
            <p class="mb-1">San Jose, CA 95134, USA</p>
            <p class="mb-0">+1 (123) 456 7891, +44 (876) 543 2198</p>
          </div>
          <div>
            <h4 class="fw-medium">INVOICE #{{ $invoice->invoice_number }}</h4>
            <div class="mb-2">
              <span class="fw-medium">Date Issues:</span>
              <span>{{ $invoice->created_at->format('d/m/Y') }}</span>
            </div>
            <div class="mb-2">
              <span class="fw-medium">Date Due:</span>
              <span>{{ $invoice->created_at->addDays(30)->format('d/m/Y') }}</span>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-0" />
      <div class="card-body border-top-0">
        <div class="row p-sm-4 p-0">
          <div class="col-xl-6 col-md-12 col-sm-5 col-12 mb-xl-0 mb-md-4 mb-sm-0 mb-4">
            <h6 class="mb-3">Invoice To:</h6>
            <p class="mb-1">{{ $invoice->customer_name }}</p>
            <p class="mb-1">{{ $invoice->customer_email }}</p>
          </div>
          <div class="col-xl-6 col-md-12 col-sm-7 col-12">
            <h6 class="mb-3">Bill To:</h6>
            <table>
              <tbody>
                <tr>
                  <td class="pe-3">Total Due:</td>
                  <td class="fw-medium">${{ number_format($invoice->total, 2) }}</td>
                </tr>
                <tr>
                  <td class="pe-3">Bank name:</td>
                  <td>American Bank</td>
                </tr>
                <tr>
                  <td class="pe-3">Country:</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td class="pe-3">IBAN:</td>
                  <td>US8765432101234567890</td>
                </tr>
                <tr>
                  <td class="pe-3">SWIFT code:</td>
                  <td>AMER22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="table-responsive border-top">
        <table class="table m-0">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            @foreach($invoice->invoice_data as $item)
            <tr>
              <td class="text-nowrap">{{ $item['description'] }}</td>
              <td class="text-nowrap">{{ $item['quantity'] }}</td>
              <td class="text-nowrap">${{ number_format($item['price'], 2) }}</td>
              <td class="text-nowrap">${{ number_format($item['quantity'] * $item['price'], 2) }}</td>
            </tr>
            @endforeach
          </tbody>
        </table>
      </div>

      <div class="card-body mx-3">
        <div class="row">
          <div class="col-12 d-flex justify-content-end">
            <div class="w-px-150">
              <div class="d-flex justify-content-between mb-2">
                <span class="w-px-100">Subtotal:</span>
                <span class="fw-medium">${{ number_format($invoice->subtotal, 2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="w-px-100">Tax:</span>
                <span class="fw-medium">${{ number_format($invoice->tax, 2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2 text-danger">
                <span class="w-px-100">Discount:</span>
                <span class="fw-medium">-${{ number_format($invoice->discount, 2) }}</span>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <span class="w-px-100">Total:</span>
                <span class="fw-medium">${{ number_format($invoice->total, 2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-0" />

      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <span class="fw-medium text-heading">Note:</span>
            <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Invoice -->

  <!-- Invoice Actions -->
  <div class="col-xl-3 col-lg-4 col-12 invoice-actions">
    <div class="card">
      <div class="card-body">
        <button class="btn btn-primary d-grid w-100 mb-2 waves-effect waves-light" data-bs-toggle="offcanvas" data-bs-target="#sendInvoiceOffcanvas">
          <span class="d-flex align-items-center justify-content-center text-nowrap"><i class="ti ti-send ti-xs me-2"></i>Send Invoice</span>
        </button>
        <a href="{{ route('admin.invoices.pdf', $invoice->id) }}" class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect waves-light" target="_blank">
          Download
        </a>
        <a href="{{ route('admin.invoices.pdf', $invoice->id) }}" class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect waves-light" target="_blank">
          Print
        </a>
        <a href="{{ route('admin.invoices.edit', $invoice->id) }}" class="btn btn-label-secondary d-grid w-100 mb-2 waves-effect waves-light">
          Edit Invoice
        </a>
        <button class="btn btn-success d-grid w-100 waves-effect waves-light" data-bs-toggle="offcanvas" data-bs-target="#addPaymentOffcanvas">
          <span class="d-flex align-items-center justify-content-center text-nowrap"><i class="ti ti-currency-dollar ti-xs me-2"></i>Add Payment</span>
        </button>
      </div>
    </div>
  </div>
  <!-- /Invoice Actions -->
</div>

<!-- Offcanvas -->
<!-- Send Invoice Sidebar -->
<div class="offcanvas offcanvas-end" id="sendInvoiceOffcanvas" aria-hidden="true">
  <div class="offcanvas-header my-1">
    <h5 class="offcanvas-title">Send Invoice</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body pt-0 flex-grow-1">
    <form>
      <div class="mb-3">
        <label for="invoice-from" class="form-label">From</label>
        <input type="text" class="form-control" id="invoice-from" value="info@designdev.com" readonly />
      </div>
      <div class="mb-3">
        <label for="invoice-to" class="form-label">To</label>
        <input type="text" class="form-control" id="invoice-to" value="{{ $invoice->customer_email }}" readonly />
      </div>
      <div class="mb-3">
        <label for="invoice-subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="invoice-subject" value="Invoice #{{ $invoice->invoice_number }}" />
      </div>
      <div class="mb-3">
        <label for="invoice-message" class="form-label">Message</label>
        <textarea class="form-control" name="invoice-message" id="invoice-message" cols="3" rows="8">Dear Customer, Thank you for your business. Here is your invoice #{{ $invoice->invoice_number }} for ${{ number_format($invoice->total, 2) }}.</textarea>
      </div>
      <div class="mb-4">
        <span class="badge bg-label-primary">
          <i class="ti ti-link ti-xs"></i>
          <span class="align-middle">Invoice Attached</span>
        </span>
      </div>
      <div class="mb-3 d-flex flex-wrap">
        <button type="button" class="btn btn-primary me-3" data-bs-dismiss="offcanvas">Send</button>
        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
      </div>
    </form>
  </div>
</div>
<!-- /Send Invoice Sidebar -->

<!-- Add Payment Sidebar -->
<div class="offcanvas offcanvas-end" id="addPaymentOffcanvas" aria-hidden="true">
  <div class="offcanvas-header my-1">
    <h5 class="offcanvas-title">Add Payment</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body pt-0 flex-grow-1">
    <form action="{{ route('admin.invoices.update', $invoice->id) }}" method="POST">
      @csrf
      @method('PUT')
      <input type="hidden" name="customer_name" value="{{ $invoice->customer_name }}">
      <input type="hidden" name="customer_email" value="{{ $invoice->customer_email }}">
      <input type="hidden" name="tax" value="{{ $invoice->tax }}">
      <input type="hidden" name="discount" value="{{ $invoice->discount }}">
      @foreach($invoice->invoice_data as $index => $item)
          <input type="hidden" name="items[{{$index}}][description]" value="{{ $item['description'] }}">
          <input type="hidden" name="items[{{$index}}][quantity]" value="{{ $item['quantity'] }}">
          <input type="hidden" name="items[{{$index}}][price]" value="{{ $item['price'] }}">
      @endforeach
      
      <div class="mb-3">
        <label class="form-label" for="invoiceAmount">Payment Amount</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input type="text" id="invoiceAmount" name="invoiceAmount" class="form-control" value="{{ number_format($invoice->total, 2, '.', '') }}" />
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label" for="payment-date">Payment Date</label>
        <input id="payment-date" class="form-control date-picker" type="text" value="{{ date('Y-m-d') }}" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="payment-method">Payment Method</label>
        <select class="form-select" id="payment-method" name="status">
          <option value="paid" selected>Cash/Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="form-label" for="payment-note">Internal Payment Note</label>
        <textarea class="form-control" id="payment-note" rows="2"></textarea>
      </div>
      <div class="mb-3 d-flex flex-wrap">
        <button type="submit" class="btn btn-primary me-3">Apply Payment</button>
        <button type="button" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
      </div>
    </form>
  </div>
</div>
<!-- /Add Payment Sidebar -->
@endsection
