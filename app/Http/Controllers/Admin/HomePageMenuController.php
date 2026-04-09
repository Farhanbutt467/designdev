<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomePageMenuController extends Controller
{
    /**
     * Serve the Web View for the Admin Panel.
     */
    public function webIndex()
    {
        $menus = \App\Models\HomePageMenu::with('submenus')->whereNull('parent')->get();
        // Get all for parent selection
        $allMenus = \App\Models\HomePageMenu::all();
        return view('admin.home-menu.index', compact('menus', 'allMenus'));
    }

    public function webStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'parent' => 'nullable|exists:home_page_menus,id',
        ]);

        \App\Models\HomePageMenu::create($validated);
        return redirect()->route('admin.home-menu.index')->with('success', 'Menu Item created successfully.');
    }

    public function webUpdate(Request $request, string $id)
    {
        $menu = \App\Models\HomePageMenu::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'parent' => 'nullable|exists:home_page_menus,id|different:id',
        ]);

        $menu->update($validated);
        return redirect()->route('admin.home-menu.index')->with('success', 'Menu Item updated successfully.');
    }

    public function webDestroy(string $id)
    {
        $menu = \App\Models\HomePageMenu::findOrFail($id);
        $menu->delete(); // Cascading handled by DB
        return redirect()->route('admin.home-menu.index')->with('success', 'Menu Item deleted successfully.');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = \App\Models\HomePageMenu::with('submenus')->whereNull('parent')->get();
        return response()->json($menus);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'parent' => 'nullable|exists:home_page_menus,id',
        ]);

        $menu = \App\Models\HomePageMenu::create($validated);
        return response()->json($menu, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $menu = \App\Models\HomePageMenu::with('submenus')->findOrFail($id);
        return response()->json($menu);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $menu = \App\Models\HomePageMenu::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'parent' => 'nullable|exists:home_page_menus,id',
        ]);

        $menu->update($validated);
        return response()->json($menu);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $menu = \App\Models\HomePageMenu::findOrFail($id);
        $menu->delete(); // cascade delete handles submenus based on migration
        return response()->json(['message' => 'Home Page Menu deleted successfully.']);
    }
}
