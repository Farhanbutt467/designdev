<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContentPageController extends Controller
{
    /**
     * Serve the Web View for the Admin Panel.
     */
    public function webIndex()
    {
        $pages = \App\Models\ContentPage::all();
        return view('admin.content-pages.index', compact('pages'));
    }

    public function webStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:content_pages,slug|max:255',
            'seo' => 'nullable|string',
            'meta_details' => 'nullable|string',
            'content' => 'nullable|string',
        ]);

        // Convert string JSON inputs back to arrays
        $validated['seo'] = $request->input('seo') ? json_decode($request->input('seo'), true) : null;
        $validated['meta_details'] = $request->input('meta_details') ? json_decode($request->input('meta_details'), true) : null;
        $validated['content'] = $request->input('content') ? json_decode($request->input('content'), true) : null;

        \App\Models\ContentPage::create($validated);
        return redirect()->route('admin.content-pages.index')->with('success', 'Content Page created successfully.');
    }

    public function webUpdate(Request $request, string $id)
    {
        $page = \App\Models\ContentPage::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:content_pages,slug,' . $id . '|max:255',
            'seo' => 'nullable|string',
            'meta_details' => 'nullable|string',
            'content' => 'nullable|string',
        ]);

        // Convert string JSON inputs back to arrays
        $page->update([
            'title' => $validated['title'],
            'slug' => $validated['slug'],
            'seo' => $request->input('seo') ? json_decode($request->input('seo'), true) : null,
            'meta_details' => $request->input('meta_details') ? json_decode($request->input('meta_details'), true) : null,
            'content' => $request->input('content') ? json_decode($request->input('content'), true) : null,
        ]);

        return redirect()->route('admin.content-pages.index')->with('success', 'Content Page updated successfully.');
    }

    public function webDestroy(string $id)
    {
        $page = \App\Models\ContentPage::findOrFail($id);
        $page->delete();
        return redirect()->route('admin.content-pages.index')->with('success', 'Content Page deleted successfully.');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = \App\Models\ContentPage::all();
        return response()->json($pages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:content_pages,slug|max:255',
            'seo' => 'nullable|array',
            'meta_details' => 'nullable|array',
            'content' => 'nullable|array',
        ]);

        $page = \App\Models\ContentPage::create($validated);
        return response()->json($page, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $page = \App\Models\ContentPage::findOrFail($id);
        return response()->json($page);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $page = \App\Models\ContentPage::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|unique:content_pages,slug,' . $id . '|max:255',
            'seo' => 'nullable|array',
            'meta_details' => 'nullable|array',
            'content' => 'nullable|array',
        ]);

        $page->update($validated);
        return response()->json($page);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $page = \App\Models\ContentPage::findOrFail($id);
        $page->delete();
        return response()->json(['message' => 'Content Page deleted successfully.']);
    }
}
