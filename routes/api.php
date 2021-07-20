<?php

use App\Http\Controllers\ContactoController;
use App\Http\Controllers\PassportAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('Contacto', [ContactoController::class,'index']);

// Route::get('logincontacto', [ContactoController::class,'login']);



Route::group(['middleware' => ['cors']], function () {
    Route::post('contacto', function (Request $request) {
        return json_encode('Welcome'.$request->nombre);
    });
    Route::post('registro', function (Request $request) {
        return json_encode('Welcome'.$request->nombre);
    });
});

/* Contacto: */
Route::post('login', [ContactoController::class, 'login']);
/* Registro y Login Usuario: */
Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth.api')->group(function () {
/*     las que dependan de una validación van aquí adentro */
});