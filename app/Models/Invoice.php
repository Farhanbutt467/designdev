<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'invoice_number',
        'customer_name',
        'customer_email',
        'subtotal',
        'tax',
        'discount',
        'total',
        'status',
        'invoice_data',
    ];

    protected $casts = [
        'invoice_data' => 'array',
    ];
}
