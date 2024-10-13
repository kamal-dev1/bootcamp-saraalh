<?php

namespace App\Http\Controllers;

use App\Enums\TaskStatus;
use App\Models\Product;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function addTask(Request $request){
        $validator = Validator::make(
            $request->all(),
            [
                'title' => ['required','min:5'],


            ],
            [
                'title.required' => 'عنوان را وارد نکرده اید',
                'title.min' => 'عنوان حداقل باید 5 کاراکتر باشد',

            ]
        );
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }
        if (!User::where(['id' => $request->assign_user_id])->exists()) {
            return response()->json(['error' => 'کاربری برای مقدصد این تسک یافت نشد'], 400);
        }

        Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'creator_user_id' => Auth::user()->id,
            'assign_user_id' => $request->assign_user_id,
            'status' => TaskStatus::unDone
        ]);

        return response()->json(['message' => "تسک با موفقیت ثبت شد"], 200);
    }
    public function editTask(Request $request,$task_id){
        $validator = Validator::make(
            $request->all(),
            [
                'title' => ['required','min:5'],


            ],
            [
                'title.required' => 'عنوان را وارد نکرده اید',
                'title.min' => 'عنوان حداقل باید 5 کاراکتر باشد',

            ]
        );
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }


        Task::where(['id'=>$task_id])->update([
            'title' => $request->title,
            'description' => $request->description,
            'assign_user_id' => $request->assign_user_id,
        ]);

        return response()->json(['message' => "تسک با موفقیت ویرایش شد"], 200);
    }
    public function getTaskByid($task_id){
        if (!Task::where(['id'=>$task_id])->exists()) {
            return response()->json(['error' =>"تسکی با این شناسه یافت نشد"], 400);
        }
        $task=Task::find($task_id);
        return response()->json(['task' =>$task], 200);
    }
    public function deleteTask($task_id){
        if (!Task::where(['id'=>$task_id,'creator_user_id'=>Auth::user()->id])->exists()) {
            return response()->json(['error' =>"تسکی با این شناسه یافت نشد"], 400);
        }
        Task::where(['id'=>$task_id])->delete();
        return response()->json(['message' =>"تسک با موفقیت حذف شد"], 200);
    }
    public function doneTask($task_id){
        if (!Task::where(['id'=>$task_id,'assign_user_id'=>Auth::user()->id])->exists()) {
            return response()->json(['error' =>"تسکی با این شناسه یافت نشد"], 400);
        }

        Task::where(['id'=>$task_id,'assign_user_id'=>Auth::user()->id])->update([
            'status'=>TaskStatus::done
        ]);
        return response()->json(['message' =>"تسک با موفقیت انجام شد"], 200);
    }
    public function getMyTask(){
        $tasks=Task::where(['assign_user_id'=>Auth::user()->id])->get();

        return response()->json(['tasks' =>$tasks], 200);
    }
}





