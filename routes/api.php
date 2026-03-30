<?php

use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public routes
Route::post('/login', [ApiAuthController::class, 'login']);
Route::get('/posts', [PostController::class, 'index']);

// Protected routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [ApiAuthController::class, 'logout']);
});
