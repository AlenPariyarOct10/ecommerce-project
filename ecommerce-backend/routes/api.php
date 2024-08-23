<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

Route::post("/categories", [CategoryController::class, "store"]);
Route::delete("/categories/{id}", [CategoryController::class, "destroy"]);
Route::post("/categories/check_title", [CategoryController::class, "check_title"]);
Route::get("/categories/{id}/getName", [CategoryController::class, "getName"]);
Route::get("/categories", [CategoryController::class, "index"]);
Route::get("/categories/{slug}", [CategoryController::class, "show"]);
Route::get("/categories/{slug}/{count}", [CategoryController::class, "showUpto"]);
//Route::get("/categories/{slug}/show", function(){return "hello";})

Route::get("/products", [\App\Http\Controllers\ProductController::class, "index"]);
Route::post("/products", [\App\Http\Controllers\ProductController::class, "store"]);
Route::delete("/products/{slug}", [\App\Http\Controllers\ProductController::class, "destroy"]);
Route::get("/products/{slug}", [\App\Http\Controllers\ProductController::class, "show"]);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
