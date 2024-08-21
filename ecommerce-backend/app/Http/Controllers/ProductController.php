<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Eager load the category relationship
        $allProducts = Product::with('category')->get();

        // If you only want the category name
        $allProducts->map(function ($product) {
            $product->category_name = $product->category ? $product->category->name : 'No Category';
            return $product;
        });

        return response()->json($allProducts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:products,name',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric|min:0|max:1000000',
            'discount' => 'required|numeric|min:0|max:100',
            'category_id' => 'required|integer|exists:categories,id',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $slug = Str::slug($request->name);

        $request->merge(['slug' => $slug]);

        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'discount' => $request->discount,
            'slug' => $slug,
            'category_id' => $request->category_id,
        ]);


        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $fileName = time() . '_' . $image->getClientOriginalName();
                $image->move(public_path('assets/uploads/products'), $fileName);

                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $fileName,
                ]);
            }
        }
        return response()->json(['message' => 'Product created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        return response()->json(Product::all());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $images = ProductImage::where('product_id',$id)->get();

        foreach ($images as $image) {
            $filePath = public_path('assets/uploads/products/' . $image->image_path);
            if (file_exists($filePath)) {
                unlink($filePath);
            }
            $image->delete();
        }

        if(Product::destroy($id)){
            return response()->json(['message' => 'Product deleted successfully']);
        }
    }
}
