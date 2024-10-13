<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/user',[UserController::class, 'getDataFromAngular']);
Route::post('/product',[UserController::class, 'addData']);
Route::get('/product/get',[UserController::class, 'getData']);
Route::get('/product/get/{id}',[UserController::class, 'getDataById']);
