<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageApiController;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\PostController;

// Public routes
Route::post('/login', [ApiAuthController::class, 'login']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/pages/{slug}', [PageApiController::class, 'show']);



// Protected routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [ApiAuthController::class, 'logout']);
});
