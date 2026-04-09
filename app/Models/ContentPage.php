<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentPage extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'seo',
        'meta_details',
        'content'
    ];

    protected $casts = [
        'seo' => 'array',
        'meta_details' => 'array',
        'content' => 'array',
    ];
}
