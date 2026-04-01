@extends('admin.layouts.admin')

@section('title', 'Add New Invoice')

@section('vendor-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/flatpickr/flatpickr.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/jquery-repeater/jquery-repeater.css') }}" />
@endsection

@section('page-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/css/pages/app-invoice.css') }}" />
@endsection

@section('content')
<div class="row invoice-add">
  <!-- Invoice Add-->
  <div class="col-lg-9 col-12 mb-lg-0 mb-4">
    <div class="card invoice-preview-card">
      <div class="card-body">
        <form action="{{ route('admin.invoices.store') }}" method="POST" class="source-item" id="invoiceAddForm">
          @csrf
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
              <h4 class="fw-medium">INVOICE #INV-{{ str_pad(\App\Models\Invoice::count() + 1, 5, '0', STR_PAD_LEFT) }}</h4>
              <div class="mb-2">
                <span class="fw-medium">Date Issues:</span>
                <span class="invoice-date">{{ date('d/m/Y') }}</span>
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="row px-sm-4 px-0">
            <div class="col-lg-12 col-md-12 mb-lg-0 mb-4">
              <h6 class="mb-2">Invoice To:</h6>
              <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Client Name</label>
                    <input type="text" name="customer_name" class="form-control" placeholder="John Doe" required />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Client Email</label>
                    <input type="email" name="customer_email" class="form-control" placeholder="john@example.com" required />
                  </div>
              </div>
            </div>
          </div>

          <hr class="mx-n4 my-4" />

          <div class="px-sm-4 px-0">
            <div data-repeater-list="items">
              <div class="repeater-wrapper pt-0 pt-md-4" data-repeater-item>
                <div class="d-flex border rounded position-relative pe-0">
                  <div class="row w-100 p-3">
                    <div class="col-md-6 col-12 mb-md-0 mb-4">
                      <p class="mb-2 repeater-title">Item</p>
                      <input type="text" name="description" class="form-control" placeholder="App Design" required />
                    </div>
                    <div class="col-md-3 col-6 mb-md-0 mb-4">
                      <p class="mb-2 repeater-title">Qty</p>
                      <input type="number" name="quantity" class="form-control invoice-item-qty" value="1" min="1" step="any" required />
                    </div>
                    <div class="col-md-3 col-6 mb-md-0 mb-4">
                      <p class="mb-2 repeater-title">Price</p>
                      <input type="number" name="price" class="form-control invoice-item-price" placeholder="00" min="0" step="0.01" required />
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center justify-content-between border-start p-2">
                    <i class="ti ti-x ti-sm cursor-pointer" data-repeater-delete></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pb-4">
              <div class="col-12">
                <button type="button" class="btn btn-primary waves-effect waves-light" data-repeater-create>
                  Add Item
                </button>
              </div>
            </div>
          </div>

          <hr class="mx-n4 my-4" />

          <div class="row p-sm-4 p-0">
            <div class="col-md-6 order-2 order-md-1">
              <div class="d-flex align-items-center mb-2">
                <label for="salesperson" class="form-label fw-medium me-2">Salesperson:</label>
                <input type="text" class="form-control" id="salesperson" value="Admin" readonly />
              </div>
              <input type="text" class="form-control" id="invoiceDetails" placeholder="Thanks for your business" />
            </div>
            <div class="col-md-6 d-flex justify-content-end order-1 order-md-2">
              <div class="invoice-calculations">
                <div class="d-flex justify-content-between mb-2">
                  <span class="w-px-100">Subtotal:</span>
                  <span class="fw-medium">$<span id="subtotalLabel">0.00</span></span>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2 text-nowrap">
                  <span class="w-px-100">Tax:</span>
                  <input type="number" name="tax" id="taxInput" class="form-control form-control-sm w-px-100 ms-2" value="0.00" step="0.01" />
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2 text-nowrap">
                  <span class="w-px-100">Discount:</span>
                  <input type="number" name="discount" id="discountInput" class="form-control form-control-sm w-px-100 ms-2" value="0.00" step="0.01" />
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                  <span class="w-px-100">Total:</span>
                  <span class="fw-medium">$<span id="totalLabel">0.00</span></span>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="row px-sm-4 px-0">
            <div class="col-12">
              <div class="mb-3">
                <label for="note" class="form-label fw-medium">Note:</label>
                <textarea class="form-control" rows="2" id="note" placeholder="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"></textarea>
              </div>
            </div>
          </div>
          
          <div class="d-none">
            <input type="hidden" name="status" id="invoiceStatusHidden" value="unpaid">
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Invoice Add-->

  <!-- Invoice Actions -->
  <div class="col-lg-3 col-12 invoice-actions">
    <div class="card mb-4">
      <div class="card-body">
        <button type="button" class="btn btn-primary d-grid w-100 mb-3 waves-effect waves-light" onclick="document.getElementById('invoiceAddForm').submit()">
          <span class="d-flex align-items-center justify-content-center text-nowrap"><i class="ti ti-send ti-xs me-1"></i>Send Invoice</span>
        </button>
        <button type="button" class="btn btn-label-secondary d-grid w-100 mb-3 waves-effect waves-light" onclick="document.getElementById('invoiceAddForm').submit()">
          Save
        </button>
        <a href="{{ route('admin.invoices.index') }}" class="btn btn-label-secondary d-grid w-100">Preview</a>
      </div>
    </div>
    <div>
      <p class="mb-2">Accept payments via</p>
      <select class="form-select mb-4">
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Debit Card">Debit Card</option>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
      </select>
      <div class="d-flex justify-content-between mb-2">
        <label for="payment-terms" class="mb-0">Payment Terms</label>
        <label class="switch switch-primary me-0">
          <input type="checkbox" class="switch-input" id="payment-terms" checked />
          <span class="switch-toggle-slider">
            <span class="switch-on"></span>
            <span class="switch-off"></span>
          </span>
          <span class="switch-label"></span>
        </label>
      </div>
      <div class="d-flex justify-content-between mb-2">
        <label for="client-notes" class="mb-0">Client Notes</label>
        <label class="switch switch-primary me-0">
          <input type="checkbox" class="switch-input" id="client-notes" />
          <span class="switch-toggle-slider">
            <span class="switch-on"></span>
            <span class="switch-off"></span>
          </span>
          <span class="switch-label"></span>
        </label>
      </div>
      <div class="d-flex justify-content-between">
        <label for="payment-stub" class="mb-0">Payment Stub</label>
        <label class="switch switch-primary me-0">
          <input type="checkbox" class="switch-input" id="payment-stub" />
          <span class="switch-toggle-slider">
            <span class="switch-on"></span>
            <span class="switch-off"></span>
          </span>
          <span class="switch-label"></span>
        </label>
      </div>
      
      <div class="mt-4">
          <label class="form-label">Status</label>
          <select class="form-select" onchange="document.getElementById('invoiceStatusHidden').value = this.value">
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="cancelled">Cancelled</option>
          </select>
      </div>
    </div>
  </div>
  <!-- /Invoice Actions -->
</div>
@endsection

@section('vendor-js')
    <script src="{{ asset('admin-assets/vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('admin-assets/vendor/libs/cleavejs/cleave.js') }}"></script>
    <script src="{{ asset('admin-assets/vendor/libs/jquery-repeater/jquery-repeater.js') }}"></script>
@endsection

@section('page-js')
    <script src="{{ asset('admin-assets/js/app-invoice-add.js') }}"></script>
    <script>
        // Custom calculation logic after template JS loads
        $(function () {
            // UNBIND template's default submit preventer
            $('.source-item').off('submit');
            
            const calculateTotals = function() {
                let subtotal = 0;
                $('[data-repeater-item]').each(function() {
                    const qty = parseFloat($(this).find('.invoice-item-qty').val()) || 0;
                    const price = parseFloat($(this).find('.invoice-item-price').val()) || 0;
                    subtotal += qty * price;
                });
                
                const tax = parseFloat($('#taxInput').val()) || 0;
                const discount = parseFloat($('#discountInput').val()) || 0;
                const total = (subtotal + tax) - discount;

                $('#subtotalLabel').text(subtotal.toFixed(2));
                $('#totalLabel').text(total.toFixed(2));
            };

            $(document).on('input', '.invoice-item-qty, .invoice-item-price, #taxInput, #discountInput', calculateTotals);
            $(document).on('click', '[data-repeater-create], [data-repeater-delete]', function() {
                setTimeout(calculateTotals, 100);
            });
        });
    </script>
@endsection
