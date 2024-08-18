<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function (Request $request) {
    return "test pass";
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
