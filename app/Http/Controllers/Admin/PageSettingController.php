<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageSettingController extends Controller
{
    /**
     * Serve the Web View for the Admin Panel.
     */
    public function webIndex()
    {
        $settings = \App\Models\PageSetting::all();
        return view('admin.page-settings.index', compact('settings'));
    }

    public function webStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:page_settings,slug|max:255',
            'value' => 'nullable|string',
        ]);

        \App\Models\PageSetting::create($validated);
        return redirect()->route('admin.page-settings.index')->with('success', 'Page Setting created successfully.');
    }

    public function webUpdate(Request $request, string $id)
    {
        $setting = \App\Models\PageSetting::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:page_settings,slug,' . $id . '|max:255',
            'value' => 'nullable|string',
        ]);

        $setting->update($validated);
        return redirect()->route('admin.page-settings.index')->with('success', 'Page Setting updated successfully.');
    }

    public function webDestroy(string $id)
    {
        $setting = \App\Models\PageSetting::findOrFail($id);
        $setting->delete();
        return redirect()->route('admin.page-settings.index')->with('success', 'Page Setting deleted successfully.');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = \App\Models\PageSetting::all();
        return response()->json($settings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:page_settings,slug|max:255',
            'value' => 'nullable|string',
        ]);

        $setting = \App\Models\PageSetting::create($validated);
        return response()->json($setting, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $setting = \App\Models\PageSetting::findOrFail($id);
        return response()->json($setting);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $setting = \App\Models\PageSetting::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'slug' => 'sometimes|required|string|unique:page_settings,slug,' . $id . '|max:255',
            'value' => 'nullable|string',
        ]);

        $setting->update($validated);
        return response()->json($setting);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $setting = \App\Models\PageSetting::findOrFail($id);
        $setting->delete();
        return response()->json(['message' => 'Page Setting deleted successfully.']);
    }
}
