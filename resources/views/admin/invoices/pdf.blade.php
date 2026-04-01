<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $invoice->invoice_number }}</title>
    <style>
        @page {
            margin: 0;
        }
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            margin: 0;
            padding: 40px;
            color: #334155;
            line-height: 1.5;
            background-color: #fff;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 50px;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 30px;
        }
        .company-logo {
            font-size: 28px;
            font-weight: 800;
            color: #7367F0;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
        }
        .invoice-title {
            text-align: right;
        }
        .invoice-title h1 {
            font-size: 32px;
            color: #0f172a;
            margin: 0;
            font-weight: 700;
        }
        .invoice-info-table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }
        .invoice-info-table td {
            padding: 2px 0;
            font-size: 13px;
        }
        .info-label {
            color: #64748b;
            font-weight: 600;
            width: 100px;
        }
        .info-value {
            color: #0f172a;
            text-align: right;
        }
        .details-section {
            display: table;
            width: 100%;
            margin-bottom: 40px;
        }
        .details-box {
            display: table-cell;
            width: 50%;
            vertical-align: top;
        }
        .details-box h2 {
            font-size: 14px;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
        }
        .details-content p {
            margin: 0;
            font-size: 14px;
        }
        .status-pill {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 5px;
        }
        .status-paid { background-color: #dcfce7; color: #166534; }
        .status-unpaid { background-color: #fef9c3; color: #854d0e; }
        .status-cancelled { background-color: #fee2e2; color: #991b1b; }

        table.items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        table.items-table th {
            text-align: left;
            background-color: #f8fafc;
            color: #475569;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 12px 15px;
            border-bottom: 2px solid #e2e8f0;
        }
        table.items-table td {
            padding: 15px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
        }
        .text-right { text-align: right; }
        .text-center { text-align: center; }

        .summary-section {
            float: right;
            width: 300px;
        }
        .summary-row {
            display: table;
            width: 100%;
            margin-bottom: 10px;
        }
        .summary-row > div {
            display: table-cell;
            font-size: 14px;
        }
        .summary-label {
            color: #64748b;
            text-align: left;
        }
        .summary-value {
            color: #0f172a;
            text-align: right;
            font-weight: 600;
        }
        .summary-total {
            border-top: 2px solid #7367F0;
            margin-top: 15px;
            padding-top: 15px;
        }
        .summary-total .summary-label {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
        }
        .summary-total .summary-value {
            font-size: 22px;
            font-weight: 800;
            color: #7367F0;
        }
        .footer {
            position: fixed;
            bottom: 40px;
            left: 40px;
            right: 40px;
            text-align: center;
            border-top: 1px solid #f1f5f9;
            padding-top: 20px;
            font-size: 12px;
            color: #94a3b8;
        }
        .clear { clear: both; }
    </style>
</head>
<body>
    <div class="header">
        <div style="float: left;">
            <p class="company-logo">DesignDev</p>
            <div style="font-size: 12px; color: #64748b; margin-top: 5px;">
                Office 149, 450 South Brand Blvd<br>
                Phone: +1 (123) 456 7891<br>
                Email: info@designdev.com
            </div>
        </div>
        <div style="float: right;" class="invoice-title">
            <h1>INVOICE</h1>
            <table class="invoice-info-table">
                <tr>
                    <td class="info-label">Invoice #:</td>
                    <td class="info-value"><strong>{{ $invoice->invoice_number }}</strong></td>
                </tr>
                <tr>
                    <td class="info-label">Date:</td>
                    <td class="info-value">{{ $invoice->created_at->format('M d, Y') }}</td>
                </tr>
                <tr>
                    <td class="info-label">Status:</td>
                    <td class="info-value">
                        <span class="status-pill status-{{ $invoice->status }}">{{ $invoice->status }}</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="clear"></div>
    </div>

    <div class="details-section">
        <div class="details-box">
            <h2>Billed To:</h2>
            <div class="details-content">
                <p><strong>{{ $invoice->customer_name }}</strong></p>
                <p>{{ $invoice->customer_email }}</p>
            </div>
        </div>
    </div>

    <table class="items-table">
        <thead>
            <tr>
                <th>Description</th>
                <th class="text-center" style="width: 80px;">Qty</th>
                <th class="text-right" style="width: 120px;">Price</th>
                <th class="text-right" style="width: 120px;">Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach($invoice->invoice_data as $item)
            <tr>
                <td>{{ $item['description'] }}</td>
                <td class="text-center">{{ $item['quantity'] }}</td>
                <td class="text-right">${{ number_format($item['price'], 2) }}</td>
                <td class="text-right">${{ number_format($item['quantity'] * $item['price'], 2) }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="summary-section">
        <div class="summary-row">
            <div class="summary-label">Subtotal</div>
            <div class="summary-value">${{ number_format($invoice->subtotal, 2) }}</div>
        </div>
        <div class="summary-row">
            <div class="summary-label">Tax</div>
            <div class="summary-value">${{ number_format($invoice->tax, 2) }}</div>
        </div>
        @if($invoice->discount > 0)
        <div class="summary-row">
            <div class="summary-label">Discount</div>
            <div class="summary-value" style="color: #ef4444;">-${{ number_format($invoice->discount, 2) }}</div>
        </div>
        @endif
        <div class="summary-row summary-total">
            <div class="summary-label">Total Amount</div>
            <div class="summary-value">${{ number_format($invoice->total, 2) }}</div>
        </div>
    </div>
    <div class="clear"></div>

    <div class="footer">
        <p>Thank you for choosing DesignDev. We appreciate your business!</p>
        <p style="margin-top: 5px;">DesignDev | www.designdev.com | support@designdev.com</p>
    </div>
</body>
</html>
