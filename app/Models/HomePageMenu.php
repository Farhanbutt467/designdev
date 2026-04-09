<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomePageMenu extends Model
{
    protected $fillable = [
        'title',
        'parent'
    ];

    public function parentMenu()
    {
        return $this->belongsTo(HomePageMenu::class, 'parent');
    }

    public function submenus()
    {
        return $this->hasMany(HomePageMenu::class, 'parent');
    }
}
