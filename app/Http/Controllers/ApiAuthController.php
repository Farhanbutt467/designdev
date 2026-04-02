<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class ApiAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $credentials['status'] = 'active';

        if (!Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->first();
            if ($user && $user->status !== 'active' && Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['Your account has been deactivated. Please contact the administrator.'],
                ]);
            }

            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response()->json(['message' => 'Login successful', 'user' => Auth::user()]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout successful']);
    }
}
