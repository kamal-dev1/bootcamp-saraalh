<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/bootcamp', function () {
//     return view('bootcamp');
// });
Route::get('/bootcamp',[TestController::class, 'getData']);
