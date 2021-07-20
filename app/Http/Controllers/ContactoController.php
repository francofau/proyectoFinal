<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacto;

class ContactoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Contacto::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login(Request $request)
    {
        $user = new Contacto();
        //user->nombreusadoenBASEdeDATOS = request->nombreusadoenlaVISTA//
        $user->nombre = $request->nombre;
        $user->apellido =$request->apellido;
        $user->email =$request->email;
        $user->telefono =$request->telefono;
        $user->mens =$request->mens;
       /*  $user->adj =$request->adj; */

        $user->save();
        return ['status'=>'success', 'msg'=>'escribir mensaje'];
    }

}
