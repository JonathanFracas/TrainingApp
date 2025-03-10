<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * BODYPARTSCONTROLLER
 */
Route::get('bodyPart/get', 'App\Http\Controllers\Musculation\BodyPartsController@get');

/**
 * EXERCISETYPESCONTROLLER
 */
Route::get('exerciseTypes/get', 'App\Http\Controllers\Musculation\ExerciseTypesController@get');

/**
 * MUSCULATIONEXERCISECONTROLLER
 */
Route::get('musculationExercise/get/{bodyPart}', 'App\Http\Controllers\Musculation\MusculationExercisesController@get');
Route::post('musculationExercise/save/{newExercise}', 'App\Http\Controllers\Musculation\MusculationExercisesController@save');
Route::post('musculationExercise/saveElastic/{newElastic}', 'App\Http\Controllers\Musculation\MusculationExercisesController@saveElastic');
Route::get('musculationExercise/getElastics', 'App\Http\Controllers\Musculation\MusculationExercisesController@getElastics');

/**
 * MUSCULATIONSESSIONSCONTROLLER
 */
Route::post('musculationSession/save/{musculationSessions}/{bodyPartId}/{date}', 'App\Http\Controllers\Musculation\MusculationSessionsController@save');
Route::get('musculationSession/copyLastSession/{bodyPartId}', 'App\Http\Controllers\Musculation\MusculationSessionsController@copyLastSession');
Route::get('musculationSession/copyBySessionNumber/{sessionNumber}', 'App\Http\Controllers\Musculation\MusculationSessionsController@copyBySessionNumber');

/**
 * RUNNINGSESSIONCONTROLLER
 */
Route::post('runningSession/save/{runningSession}', 'App\Http\Controllers\Running\RunningSessionsController@save');

/**
 * BIKESESSIONCONTROLLER
 */
Route::post('bikeSession/save/{bikeSession}', 'App\Http\Controllers\Bike\BikeSessionsController@save');

/**
 * FLASHEXERCISECONTROLLER
 */
Route::get('flashExercises/get', 'App\Http\Controllers\Flash\FlashExercisesController@get');
Route::get('flashExercises/getExercisesOrder', 'App\Http\Controllers\Flash\FlashExercisesController@getExercisesOrder');

/**
 * FLASHSESSIONSCONTROLLER
 */
Route::post('flashSession/save/{flashSessions}/{date}', 'App\Http\Controllers\Flash\FlashSessionsController@save');

/**
 * SESSIONSHISTORICCONTROLLER
 */
Route::get('historic/getSessionsByMonth', 'App\Http\Controllers\Historic\SessionsHistoricController@getSessionsByMonth');
Route::get('historic/getSessionsByDay', 'App\Http\Controllers\Historic\SessionsHistoricController@getSessionsByDay');

/**
 * HIITCONTROLLER
 */
Route::get('hiit/getHiitTypes', 'App\Http\Controllers\Hiit\HiitController@getHiitTypes');
Route::post('hiit/saveHiitType/{newHiitType}', 'App\Http\Controllers\Hiit\HiitController@saveHiitType');
Route::post('hiit/saveHiitSession/{newHiitSession}', 'App\Http\Controllers\Hiit\HiitController@saveHiitSession');

/**
 * SPORTCONTROLLER
 */
Route::get('sport/getSportTypes', 'App\Http\Controllers\Sport\SportController@getSportTypes');
Route::post('sport/saveSportType/{newSportType}', 'App\Http\Controllers\Sport\SportController@saveSportType');
Route::post('sport/saveSportSession/{newSportSession}', 'App\Http\Controllers\Sport\SportController@saveSportSession');
