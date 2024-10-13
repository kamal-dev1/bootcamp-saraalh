<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Container\Attributes\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    //create
    public function addUser(Request $request){



        if ($request->firstname ==null) {
            return response()->json(['error' => 'نام را وارد نکرده اید'],400);
        }

        if (User::where(['firstname'=>$request->firstname])->exists()) {
            return response()->json(['error' => 'با این نام قبلا ثبت نامی صورت گرفته است'],400);
        }
        $user=User::create([
            "firstname" => $request->firstname,
            "lastname" => $request->lastname,
            "mobile" => $request->mobile,
            "description" => $request->description,
            "birthday" => $request->birthday,
        ]);

        Auth::login($user);
        $token=$user->createToken('bootcamp')->accessToken;




        return response()->json(['message' => 'ثبت نامم انجام شد', 'token'=>$token],200);
    }

    //read

    public function getUserBuId($id){
        $user=User::where(["id"=>$id])->first();
        // $user=User::where('id',$id)->first();
        if ($user==null) {
            return response()->json(['error' =>"کاربری یافت نشد" ],400);
        }
        return response()->json(['user' =>$user ],200);
    }
    // read
    public function getUsers(Request $request){
        $query = User::query();

        if ($request->filled('firstname')) {

            $query->where('firstname','Like','%'.$request->firstname . '%'  );
        }
        if ($request->filled('lastname')) {
            $query->where('lastname',$request->lastname  );
        }
        if ($request->filled('mobile')) {
            $query->where('mobile','Like','%'.$request->mobile . '%'  );
        }

        $users=$query->get();

        if ($users==null) {
            return response()->json(['error' =>"کاربری یافت نشد" ],400);
        }
        return response()->json(['users' =>$users ],200);
    }
    // update
    public function updateUser(Request $request,$id){
        if (!User::where('id',$id)->exists()) {
            return response()->json(['error' =>'کاربری با این شناسه یافت نشد' ],400);
        }

        User::where('id',$id)->update([
            "firstname" => $request->firstname
        ]);
        return response()->json(['message' =>'ویرایش انجام شد' ],200);

    }

    public function deleteUser($id){
        if (!User::where('id',$id)->exists()) {
            return response()->json(['error' =>'کاربری با این شناسه یافت نشد' ],400);
        }
        User::where('id',$id)->delete();
        return response()->json(['message' =>'عملیات حذف با موفقیت انجام شد' ],200);
    }

}
