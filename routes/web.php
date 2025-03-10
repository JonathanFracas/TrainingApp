<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/**
 * ROUTES VERS HOME
 */
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

/**
 * ROUTES VERS NOUVELLE SESSION
 */

// Route vers la page de nouvelle session de musculation.
Route::get('/new/sessions/musculation', function () {
    return Inertia::render('Sessions/Musculation/NewMusculationSession');
})->name('new.sessions.musculation');

// Route vers la page de nouvelle session de running.
Route::get('/new/sessions/running', function () {
    return Inertia::render('Sessions/Running/NewRunningSession');
})->name('new.sessions.running');

// Route vers la page de nouvelle session de vélo.
Route::get('/new/sessions/bike', function () {
    return Inertia::render('Sessions/Bike/NewBikeSession');
})->name('new.sessions.bike');

// Route vers la page de nouvelle session flash.
Route::get('/new/sessions/flash', function () {
    return Inertia::render('Sessions/Flash/NewFlashSession');
})->name('new.sessions.flash');

// Route vers la page de nouvelle session flash.
Route::get('/new/sessions/hiit', function () {
    return Inertia::render('Sessions/Hiit/NewHiitSession');
})->name('new.sessions.hiit');

// Route vers la page de nouvelle session flash.
Route::get('/new/sessions/sport', function () {
    return Inertia::render('Sessions/Sport/NewSportSession');
})->name('new.sessions.sport');

/**
 * ROUTES VERS EXERCICES
 */
// Route vers la page d'exercices de musculation.
Route::get('/exercises/musculation', function () {
    return Inertia::render('Exercises/List/MusculationExercises');
})->name('exercises.musculation');

// Route vers la page d'exercices flash.
Route::get('/exercises/flash', function () {
    return Inertia::render('Exercises/List/FlashExercises');
})->name('exercises.flash');

/**
 * ROUTES VERS AJOUT D'EXERCICES
 */
Route::get('exercise/musculation/new', function () {
    return Inertia::render('Exercises/Add/NewMusculationExercise');
})->name('exercise.musculation.new');

Route::get('exercise/elastic/new', function () {
    return Inertia::render('Exercises/Add/NewElastic');
})->name('elastic.new');

Route::get('exercise/hiit/type/new', function () {
    return Inertia::render('Exercises/Add/NewHiitType');
})->name('hiit.type.new');

Route::get('exercise/sport/type/new', function () {
    return Inertia::render('Exercises/Add/NewSportType');
})->name('sport.type.new');

/**
 * ROUTES VERS HISTORIQUE
 */
Route::get('/historic', function () {
    return Inertia::render('Historic/SessionsHistoric');
})->name('sessions.historic');

require __DIR__.'/auth.php';
