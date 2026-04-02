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


use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\InvoiceController;
use App\Http\Controllers\Admin\UserController;

// Admin Protected Routes
Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::resource('pages', PageController::class);
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

