<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'name' => ['required','min:3'],
                'password' => ['required','regex:/^[a-zA-Z0-9!@#$%^&*()-_+=?<>]+$/','min:6'],
                'mobile' => ['required', 'regex:/^(9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)\d{7}$/'],

            ],
            [
                'name.required' => 'نام و نام خانوادگی را وارد نکرده اید',
                'name.min' => 'نام و نام خانوادگی حداقل باید 2 کارکتر باشد',
                'password.required' => 'گذرواژه را وارد نکرده اید',
                'password.regex' => 'گذرواژه را صحیح وارد نکرده اید',
                'password.min' => 'گذرواژه حداقل باید 6 حرف باشد',
                'mobile.required' => 'موبایل را وارد نکرده اید',
                'mobile.regex' => 'موبایل را صحیح وارد نکرده اید',
            ]
        );
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }
        $mobile=$this->checkMobile($request->mobile);
        if (User::where(['mobile'=>$mobile])->exists()) {
            return response()->json(['error' =>"این موبایل قبلا ثبت شده است"], 400);
        }

        User::create([
            'name'=>$request->name,
            'password'=>bcrypt($request->password),
            'mobile'=>$this->checkMobile($request->mobile),
        ]);

        return response()->json(['message' => "ثبت نام انجام شد"], 200);
    }
    public function login(Request $request){
        $validator = Validator::make(
            $request->all(),
            [

                'password' => ['required','regex:/^[a-zA-Z0-9!@#$%^&*()-_+=?<>]+$/','min:6'],
                'mobile' => ['required', 'regex:/^(9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)\d{7}$/'],

            ],
            [
                'password.required' => 'گذرواژه را وارد نکرده اید',
                'password.regex' => 'گذرواژه را صحیح وارد نکرده اید',
                'password.min' => 'گذرواژه حداقل باید 6 حرف باشد',
                'mobile.required' => 'موبایل را وارد نکرده اید',
                'mobile.regex' => 'موبایل را صحیح وارد نکرده اید',
            ]
        );
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }
        if (!Auth::attempt(['mobile' => $request->mobile, 'password' => $request->password])) {
            return response()->json(['error' => "موبایل یا گذرواژه اشتباه می باشد"], 400);
        }
        $user=Auth::user();
        $token=$user->createToken(['bootcamp'])->accessToken;
        return response()->json(['token' => $token], 200);


    }
    public function getUserById($user_id){
        if (!User::where(['id'=>$user_id])->exists()) {
            return response()->json(['error' =>"کاربری با این شناسه یافت نشد"], 400);
        }
        $user=User::find($user_id);
        return response()->json(['user' =>$user], 200);
    }
    public function getUserByToken(){
        if (!User::where(['id'=>Auth::user()->id])->exists()) {
            return response()->json(['error' =>"کاربری با این شناسه یافت نشد"], 400);
        }
        $user=User::find(Auth::user()->id);
        return response()->json(['user' =>$user], 200);
    }
    public function getAllUser(){

        $users=User::get();
        return response()->json(['users' =>$users], 200);
    }

    private function checkMobile($mobile)
    {
        $arr = str_split($mobile);
        if ($arr[0] != 0) {
            $mobile = '0' . $mobile;
        }
        return $mobile;
    }

}
