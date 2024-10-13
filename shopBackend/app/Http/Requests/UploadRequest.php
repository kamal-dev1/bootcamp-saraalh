<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class UploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    protected function failedValidation(Validator $validator)
    {
        $errorMessage = $validator->errors()->first();
        throw new HttpResponseException(response()->json(['message' =>  $errorMessage], 400));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'file' => ['required', 'mimes:jpeg,png,jpg,gif' , 'max:2048'],
            'type' => 'required',
        ];
    }
    public function messages(): array
    {
        return [
            'file.required' => 'عکسی اپلود نکرده اید',
            'file.mimes' => 'فرمت عکس اشتباه است',
            'file.max' =>  'عکس باید کمتراز 2 مگابایت باشد',
            'type.required' => 'خطا رخ داده است',
        ];
    }
}
