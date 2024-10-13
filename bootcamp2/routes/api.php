<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/user/add', [App\Http\Controllers\UserController::class,"addUser"] );
Route::get('/user/{id}', [App\Http\Controllers\UserController::class,"getUserBuId"] );
Route::post('/users', [App\Http\Controllers\UserController::class,"getUsers"] )->middleware('auth:api');
Route::put('/user/edit/{id}', [App\Http\Controllers\UserController::class,"updateUser"] );
Route::delete('/user/{id}', [App\Http\Controllers\UserController::class,"deleteUser"] );
