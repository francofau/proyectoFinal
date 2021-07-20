<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\User;

class PassportAuthController extends Controller
{

    public function register(Request $request)
    {
        $this->validate($request,[
            'name' => 'required|min:5',
            'email' => 'required|email',
            'password' => 'required|min:5',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->passport)
        ]);

        $token = $user->createToken('LaravelAuthApp')->accessToken;

        return response()->json(['token' => $token], 200);

    }
    public function login(Request $request)
    {
            $data = [
                'email' => $request->email,
                'password' => $request->password,
            ];

            if (auth()->attempt($data)){
                $token =auth()->user()->createToken('LaravelAuthApp')->accessToken;
                return response()->json(['token'=>$token], 200);
            }else{
                return response()->json(['error'=>'No autorizado'], 401);
            }

    }
}

