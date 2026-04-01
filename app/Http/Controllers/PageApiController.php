<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageApiController extends Controller
{
    /**
     * Get page data by slug.
     */
    public function show($slug)
    {
        $page = Page::where('slug', $slug)
            ->where('status', 'published')
            ->first();

        if (!$page) {
            return response()->json([
                'message' => 'Page not found'
            ], 404);
        }

        return response()->json([
            'title' => $page->title,
            'content' => $page->content, // JSON/Array of sections
        ]);
    }
}
