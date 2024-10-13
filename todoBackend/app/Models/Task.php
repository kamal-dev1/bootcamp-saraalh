<?php

namespace App\Models;

use Hekmatinasser\Verta\Facades\Verta;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'creator_user_id',
        'assign_user_id',
        'status',
    ];

    protected $appends=[
        'date'
    ];
    protected $hidden=[
        'created_at',
        'updated_at',
    ];

    protected function date(): Attribute
    {
        return Attribute::make(

            get: fn () =>
                          Verta::instance($this->created_at)->format('Y-n-j H:i')

            );

    }
}
