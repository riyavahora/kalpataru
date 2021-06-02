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

// Route::get('/', function () {
//     return view('index');
// });
Route::get('/', 'HomeController@index');
Route::get('/contact', 'HomeController@contact');
Route::get('/login', 'HomeController@login');
Route::get('/register', 'HomeController@register');
Route::get('/search', 'HomeController@search');

Route::post('createUser', 'UserController@createUser');
// Route::get('createUser', 'HomeController@createUser');
