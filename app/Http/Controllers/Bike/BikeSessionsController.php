<?php

namespace App\Http\Controllers\Bike;

use App\Http\Controllers\Controller;
use App\Models\Bike\BikeSession;
use Illuminate\Http\Request;

class BikeSessionsController extends Controller
{
    public function save(Request $request)
    {
        $bikeSession = new BikeSession(($request->input()));
        $bikeSession->save();
    }
}
