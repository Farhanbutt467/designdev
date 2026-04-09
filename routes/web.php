<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
| For an API-only backend, regular web routes are minimized.
|
*/

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\LoginController;

// Admin Login (Named 'login' for Laravel Auth middleware compatibility)
Route::get('admin/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('admin/login', [LoginController::class, 'login']);
Route::post('admin/logout', [LoginController::class, 'logout'])->name('logout');


use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\UserController;

// Admin Protected Routes
Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // UI Routes for Page Settings
    Route::get('page-settings', [\App\Http\Controllers\Admin\PageSettingController::class, 'webIndex'])->name('page-settings.index');
    Route::post('page-settings', [\App\Http\Controllers\Admin\PageSettingController::class, 'webStore'])->name('page-settings.store');
    Route::put('page-settings/{id}', [\App\Http\Controllers\Admin\PageSettingController::class, 'webUpdate'])->name('page-settings.update');
    Route::delete('page-settings/{id}', [\App\Http\Controllers\Admin\PageSettingController::class, 'webDestroy'])->name('page-settings.destroy');

    // UI Routes for Home Page Menu
    Route::get('home-menu', [\App\Http\Controllers\Admin\HomePageMenuController::class, 'webIndex'])->name('home-menu.index');
    Route::post('home-menu', [\App\Http\Controllers\Admin\HomePageMenuController::class, 'webStore'])->name('home-menu.store');
    Route::put('home-menu/{id}', [\App\Http\Controllers\Admin\HomePageMenuController::class, 'webUpdate'])->name('home-menu.update');
    Route::delete('home-menu/{id}', [\App\Http\Controllers\Admin\HomePageMenuController::class, 'webDestroy'])->name('home-menu.destroy');

    // UI Routes for Content Pages
    Route::get('content-pages', [\App\Http\Controllers\Admin\ContentPageController::class, 'webIndex'])->name('content-pages.index');
    Route::post('content-pages', [\App\Http\Controllers\Admin\ContentPageController::class, 'webStore'])->name('content-pages.store');
    Route::put('content-pages/{id}', [\App\Http\Controllers\Admin\ContentPageController::class, 'webUpdate'])->name('content-pages.update');
    Route::delete('content-pages/{id}', [\App\Http\Controllers\Admin\ContentPageController::class, 'webDestroy'])->name('content-pages.destroy');

    Route::resource('users', UserController::class);

    Route::resource('invoices', InvoiceController::class);
    Route::get('/invoices/{id}/pdf', [InvoiceController::class, 'generatePdf'])->name('invoices.pdf');

    // Mailer Routes
    Route::group(['prefix' => 'mailer', 'as' => 'mailer.'], function () {
        Route::get('/settings', [\App\Http\Controllers\Admin\MailerController::class, 'settings'])->name('settings');
        Route::post('/settings', [\App\Http\Controllers\Admin\MailerController::class, 'updateSettings'])->name('settings.update');
        Route::get('/compose', [\App\Http\Controllers\Admin\MailerController::class, 'compose'])->name('compose');
        Route::post('/send', [\App\Http\Controllers\Admin\MailerController::class, 'send'])->name('send');
        Route::get('/logs', [\App\Http\Controllers\Admin\MailerController::class, 'logs'])->name('logs');
        Route::post('/test-connection', [\App\Http\Controllers\Admin\MailerController::class, 'testConnection'])->name('test-connection');
    });

    Route::get('/settings', [AdminController::class, 'settings'])->name('settings');
});


// Explicitly serve the React SPA index.html for all non-api/admin web routes
Route::get('{any}', function () {
    $indexPath = public_path('index.html');
    if (!file_exists($indexPath)) {
        return response('
            <div style="font-family: sans-serif; text-align: center; padding-top: 50px;">
                <h1>Frontend Not Built</h1>
                <p>The React SPA (<code>/react/public/index.html</code>) has not been built yet.</p>
                <p>Please run the following command in your terminal:</p>
                <code style="background: #eee; padding: 10px; display: inline-block;">cd react && npm install && npm run build</code>
                <p>Alternatively, for dynamic development, run <code>npm run dev</code> in the <code>/react</code> folder and access it at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
            </div>
        ');
    }
    return file_get_contents($indexPath);
})->where('any', '^(?!api|admin|sanctum|_debugbar|up).*');

