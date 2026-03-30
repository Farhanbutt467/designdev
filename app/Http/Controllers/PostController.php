<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id' => 1, 'title' => 'First Post', 'content' => 'Content of the first post.'],
            ['id' => 2, 'title' => 'Second Post', 'content' => 'Content of the second post.'],
            ['id' => 3, 'title' => 'Third Post', 'content' => 'Content of the third post.'],
        ]);
    }
}
