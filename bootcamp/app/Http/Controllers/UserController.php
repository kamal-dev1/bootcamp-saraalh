<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function getDataFromAngular(Request $request){
        if (!$request->filled('mobile')) {
           return response()->json(['error' => 'mobile is Empty'],400);
        }
        if (!$request->filled('fullname')) {
           return response()->json(['error' => 'fullname is Empty'],400);
        }
        return response()->json(['mobile' =>$request->mobile,'fullname' =>$request->fullname],200);
    }

    public function addData(Request $request){
        Product::create([
            "name"=>$request->name
        ]);

        return response()->json(["message"=>"add is success"],200);
    }
    public function getData(){
        $data=Product::get();

        return response()->json(["data"=>$data],200);
    }
    public function getDataById($id){
        $data=Product::where(['id'=>$id])->get();

        return response()->json(["data"=>$data],200);
    }
}
