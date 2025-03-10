<?php

namespace App\Http\Controllers\Sport;

use App\Http\Controllers\Controller;
use App\Models\Sport\SportSession;
use App\Models\Sport\SportType;
use Illuminate\Http\Request;

class SportController extends Controller
{
    public function getSportTypes()
    {
        return SportType::all();
    }

    public function saveSportType(Request $request)
    {
        $sportType = new SportType($request->input());
        $sportType->save();
    }

    public function saveSportSession(Request $request)
    {
        $sportSession = new SportSession(($request->input()));
        $sportSession->save();
    }
}
