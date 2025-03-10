<?php

namespace App\Http\Controllers\Hiit;

use App\Http\Controllers\Controller;
use App\Models\Hiit\HiitSession;
use App\Models\Hiit\HiitType;
use Illuminate\Http\Request;

class HiitController extends Controller
{
    public function getHiitTypes()
    {
        return HiitType::all();
    }

    public function saveHiitType(Request $request)
    {
        $hiitType = new HiitType($request->input());
        $hiitType->save();
    }

    public function saveHiitSession(Request $request)
    {
        $hiitSession = new HiitSession(($request->input()));
        $hiitSession->save();
    }
}
