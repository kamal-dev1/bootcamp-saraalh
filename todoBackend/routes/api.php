<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::post('/register', [UserController::class, 'register']);
        Route::post('/login', [UserController::class, 'login']);
        Route::get('/get/{user_id}', [UserController::class, 'getUserByid'])->middleware('auth:api');
        Route::get('/get', [UserController::class, 'getUserByToken'])->middleware('auth:api');
        Route::get('/getAllUser', [UserController::class, 'getAllUser'])->middleware('auth:api');
    });
    Route::group(['prefix' => 'task'], function () {
        Route::post('/addTask', [TaskController::class, 'addTask'])->middleware('auth:api');
        Route::put('/editTask/{task_id}', [TaskController::class, 'editTask'])->middleware('auth:api');
        Route::get('/get/{task_id}', [TaskController::class, 'getTaskByid'])->middleware('auth:api');
        Route::delete('/delete/{task_id}', [TaskController::class, 'deleteTask'])->middleware('auth:api');
        Route::get('/done/{task_id}', [TaskController::class, 'doneTask'])->middleware('auth:api');
        Route::get('/getMyTask', [TaskController::class, 'getMyTask'])->middleware('auth:api');
    });
});



