<?php

use App\Http\Controllers\FeedbackController;
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

// for spa
//Route::get('/{any?}', function () {
//    return view('welcome');
//});


Route::group(array('before' => 'csrf'), function () {
    Route::post('/api/v1/feedback', [FeedbackController::class, 'sendEmail'])->name('feedback.sendEmail');
});

