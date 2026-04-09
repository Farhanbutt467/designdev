<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\PostController;

// Public routes
Route::post('/login', [ApiAuthController::class, 'login']);
Route::get('/posts', [PostController::class, 'index']);

// Protected routes
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [ApiAuthController::class, 'logout']);

    // Admin APIs
    Route::prefix('admin')->group(function () {
        Route::apiResource('page-settings', \App\Http\Controllers\Admin\PageSettingController::class);
        Route::apiResource('home-menu', \App\Http\Controllers\Admin\HomePageMenuController::class);
        Route::apiResource('content-pages', \App\Http\Controllers\Admin\ContentPageController::class);
    });
});
