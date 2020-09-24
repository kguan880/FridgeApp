<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/summary/{id}', function ($id){
    echo $id;
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/fridgeapp', function () {
    return Inertia\Inertia::render('RecipeApp/FridgeApp');
})->name('fridgeapp');

// Route::middleware(['auth:sanctum', 'verified'])->get('/fridgeapp/summary/{id}', function ($id) {
    
//     return Inertia\Inertia::render('RecipeApp/Summary');
// })->name('summary');
