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
                'name' => ['required'],
                'password' => ['required','regex:/^[a-zA-Z0-9!@#$%^&*()-_+=?<>]+$/','min:6'],
                'mobile' => ['required', 'regex:/^(9|09)(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)\d{7}$/'],

            ],
            [
                'name.required' => 'نام و نام خانوادگی را وارد نکرده اید',
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

        User::create([
            'name'=>$request->name,
            'password'=>bcrypt($request->password),
            'mobile'=>$this->checkMobile($request->mobile),
        ]);

        return response()->json(['message' => "صبت نام انجام شد"], 200);
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

        if (Auth::attempt(['mobile' => $request->mobile, 'password' => $request->password])) {
            $user=Auth::user();
            $token=$user->createToken(['bootcamp'])->accessToken;
            return response()->json(['token' => $token], 200);
        }else{
            return response()->json(['error' => "موبایل یا گذرواژه اشتباه می باشد"], 400);
        }

    }
    public function getUserById($user_id){

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
