<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductImage;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = ["name", "slug", "price", "discount", "category_id", "description"];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }
}
