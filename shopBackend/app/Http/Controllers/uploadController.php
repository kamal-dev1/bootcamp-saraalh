<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Enums\UploadType;
use App\Models\Upload;
use App\Http\Requests\UploadRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class uploadController extends Controller
{

    public function uploadImage(UploadRequest $request)
    {

        $requestType = $request->type;
        $file = $request->file('file');
        $name = time() . '.' . $file->getClientOriginalExtension();
        $path = null;
        $fileAddress = null;
        $type = null;

        if ($requestType == UploadType::profileImage) {
            $path =  public_path('files/images/'.UploadType::profileImage);
            $fileAddress = 'files/images/'.UploadType::profileImage."/" . $name;
            $type =  Uploadtype::profileImage;
        }
        if ($path != null && $fileAddress != null && $type != null) {
            $file->move($path, $name);

            $upload = Upload::create([
                'name' => $name,
                'address' => $fileAddress,
                'type' => $type,
            ]);
            return response()->json(['uploadId' => $upload->id], 200);
        }
    }
    /**
     * @OA\Get(
     *   path="/api/v1/upload/image/{fileId}",
     *   tags={"Upload"},
     *   summary="گرفتن عکس با ایدی",
     *       description="",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *)
     **/
    public function getImage($fileId)
    {
        $upload = Upload::where(['id' => $fileId])->first();
        if ($upload == null) {
            return response()->json(['message' => 'عکس پیدا نشد'], 400);
        }
        $address = public_path($upload->address);
        return response()->file($address);
    }
    /**
     * @OA\Get(
     *   path="/api/v1/upload/all/image/list",
     *   tags={"Upload"},
     *   summary="گرفتن تمام عکس ها",
     *       description="",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *)
     **/
    public function getAllImageList(Request $request)
    {
        $query = Upload::query();
        $isPaginate = true;
        $countItem = 10;
        if ($request->filled('isPaginate')) {
            $isPaginate = filter_var($request->isPaginate, FILTER_VALIDATE_BOOLEAN);
        }
        if ($request->filled('countItem')) {
            $countItem = $request->countItem;
        }
        if ($isPaginate) {
            $pictures = $query->orderBy('id', 'DESC')->paginate($countItem);
        } else if ($request->filled('countItem')) {
            $pictures = $query->orderBy('id', 'DESC')->take($countItem)->get();
        } else {
            $pictures = $query->orderBy('id', 'DESC')->get();
        }
        return response()->json(['data' => $pictures], 200);
    }
    /**
     * @OA\Delete(
     *   path="/api/v1/upload/{fileId}",
     *   tags={"Upload"},
     *   summary="حذف کردن عکس",
     *       description="",
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *)
     **/
    public function deleteImage($fileId)
    {
        try {
            $upload = Upload::where('id', $fileId)->first();
            if ($upload == null) {
                return response()->json(['message' => 'عکس پیدا نشد'], 400);
            }
            $imagePath = $upload->address;
            if (!File::exists($imagePath)) {
                return response()->json(['message' => 'عکس پیدا نشد'], 400);
            }
            Upload::where('id', $fileId)->delete();
            File::delete($imagePath);
            return response()->json(['message' => 'عکس با موفقیت حذف شد'], 200);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['message' => 'امکان حذف عکس وجود ندارد'], 400);
        }
    }
}
