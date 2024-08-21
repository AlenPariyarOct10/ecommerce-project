<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allCategories = Category::all();
        return response()->json($allCategories);
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
        // Validate the input data
        $request->validate([
            'title' => 'required|max:50|unique:categories,name',
            'description' => 'required|max:255',
            'color' => 'required|max:50',

        ]);

        $slug = Str::slug($request->title);

        $request['slug'] = $slug;

        // Handle the image upload
        if($request->hasFile('images')){
            $file = $request->file('images');
            $filename = time().'_'.$file->getClientOriginalName();
            $file->move('assets/uploads/category/', $filename);
            $request->request->add(['image' => $filename]);

        }

        // Create the category with the validated data (including the image filename if uploaded)
        $category = Category::create([
            "name"=>$request->input('title'),
            "description"=>$request->input('description'),
            "color"=>$request->input('color'),
            "image"=>$request->input('image'),
            "slug"=>$slug,
        ]);
        //return response()->json($category);
        // Return a success response
        return response()->json(['success' => true, 'category' => $category, 'title'=>$request['title']]);
    }


    public function check_title(Request $request)
    {
        // Get the title from the request body
        $title = $request->input('title');

        // Query the database for an existing category with the given title
        $titleInfo = Category::where('name', $title)->exists();

        if (!$titleInfo) {
            return response()->json(["available" => true]);
        } else {
            return response()->json(["available" => false]);
        }
    }

    /**
     * Display the specified resource.
     */

    public function show(string $slug)
    {
        // Find the category by its slug
        $category = Category::where('slug', $slug)->first();

        // Check if the category exists
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        // Get all products that belong to this category and fetch only one image for each product
        $products = Product::with(['images' => function($query) {
            $query->orderBy('id')->limit(1);  // Get only the first image
        }])
            ->where('category_id', $category->id)
            ->get();

        // Append full image path to each product
        $products->each(function ($product) {
            $product->images->each(function ($image) {
                $image->url = url('/assets/uploads/products/' . $image->url);
            });
        });

        return response()->json($products);
    }

    /*
     * Show upto count numbers of records
     * */
    public function showUpto(string $slug, int $count)
    {
        // Find the category by its slug
        $category = Category::where('slug', $slug)->first();

        // Check if the category exists
        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        // Get all products that belong to this category and fetch only one image for each product
        $products = Product::with(['images' => function($query) {
            $query->orderBy('id')->limit(1);  // Get only the first image
        }])
            ->where('category_id', $category->id)->limit($count)->get();


        // Append full image path to each product
        $products->each(function ($product) {
            $product->images->each(function ($image) {
                $image->url = url('/assets/uploads/products/' . $image->url);
            });
        });

        return response()->json($products);
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
        $categoryImage = Category::where('id', $id)->get('image');
        unlink('assets/uploads/category/'.$categoryImage[0]->image);
        if(Category::findOrFail($id)->delete()){
            return response()->json(["success" => true]);
        }else{
            return response()->json(["success" => false]);
        }
    }

    public function getName(string $id)
    {
        $category = Category::findOrFail($id);

        return response()->json(['name' => $category->name]);
    }
}
