<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Str;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invoices = Invoice::latest()->paginate(10);
        return view('admin.invoices.index', compact('invoices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.invoices.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'customer_email' => 'required|email',
            'items' => 'required|array|min:1',
            'items.*.description' => 'required|string',
            'items.*.quantity' => 'required|numeric|min:1',
            'items.*.price' => 'required|numeric|min:0',
            'tax' => 'nullable|numeric|min:0',
            'discount' => 'nullable|numeric|min:0',
            'status' => 'required|in:paid,unpaid,cancelled',
        ]);

        $subtotal = 0;
        foreach ($request->items as $item) {
            $subtotal += $item['quantity'] * $item['price'];
        }

        $tax = $request->tax ?? 0;
        $discount = $request->discount ?? 0;
        $total = ($subtotal + $tax) - $discount;

        // Auto generate invoice number
        $lastInvoice = Invoice::latest()->first();
        if ($lastInvoice) {
            $lastNumber = intval(substr($lastInvoice->invoice_number, 4));
            $invoiceNumber = 'INV-' . str_pad($lastNumber + 1, 5, '0', STR_PAD_LEFT);
        } else {
            $invoiceNumber = 'INV-00001';
        }

        Invoice::create([
            'invoice_number' => $invoiceNumber,
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'subtotal' => $subtotal,
            'tax' => $tax,
            'discount' => $discount,
            'total' => $total,
            'status' => $request->status,
            'invoice_data' => $request->items,
        ]);

        return redirect()->route('admin.invoices.index')->with('success', 'Invoice created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        return view('admin.invoices.show', compact('invoice'));
    }

    /**
     * Generate PDF for the specific invoice.
     */
    public function generatePdf($id)
    {
        $invoice = Invoice::findOrFail($id);
        $pdf = Pdf::loadView('admin.invoices.pdf', compact('invoice'));
        return $pdf->download($invoice->invoice_number . '.pdf');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $invoice = Invoice::findOrFail($id);
        return view('admin.invoices.edit', compact('invoice'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'customer_name' => 'required|string',
            'customer_email' => 'required|email',
            'status' => 'required|in:paid,unpaid,cancelled',
            'items' => 'required|array|min:1',
            'items.*.description' => 'required|string',
            'items.*.quantity' => 'required|numeric|min:1',
            'items.*.price' => 'required|numeric|min:0',
        ]);

        $invoice = Invoice::findOrFail($id);

        $subtotal = 0;
        foreach ($request->items as $item) {
            $subtotal += $item['quantity'] * $item['price'];
        }

        $tax = (float)$request->tax;
        $discount = (float)$request->discount;
        $total = ($subtotal + $tax) - $discount;

        $invoice->update([
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'subtotal' => $subtotal,
            'tax' => $tax,
            'discount' => $discount,
            'total' => $total,
            'status' => $request->status,
            'invoice_data' => $request->items,
        ]);

        return redirect()->route('admin.invoices.index')->with('success', 'Invoice updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->delete();

        return redirect()->route('admin.invoices.index')->with('success', 'Invoice deleted successfully');
    }
}
