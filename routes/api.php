<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');


Route::get('/batches', 'BatchController@index');
Route::post('/batches', 'BatchController@store');
Route::get('/batches/{id}', 'BatchController@show');
// Route::get('batches/batch', 'BatchController@getBatch');

//
Route::get('/batches/{id}/samples', 'SampleController@index');
Route::post('samples', 'SampleController@store');
