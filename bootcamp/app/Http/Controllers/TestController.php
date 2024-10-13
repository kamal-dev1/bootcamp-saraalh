<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class TestController extends Controller
{
    public function getData(){
      $ostan=[
        "تهران",
        "زنجان",
        "کرمان",

      ];
        // return response()->json($ostan);
        // return response()->json(['name' => $name,"name1" => $name1]);
        return response()->view('bootcamp', compact(['ostan']));
        // return response()->view('bootcamp', compact(['name','name1']));
        // return view('bootcamp', compact(['name','name1']));

    }
}
