<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;


class Upload extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'address',
        'type',
        'id'
    ];
    protected $hidden = [
        'address',
    ];

}
