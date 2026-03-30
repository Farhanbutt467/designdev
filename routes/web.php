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
| A catch-all route at the bottom will serve our SPA.
|
*/

// Explicitly serve the React SPA index.html for all non-API web routes
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
})->where('any', '^(?!api|sanctum|_debugbar|up).*');
