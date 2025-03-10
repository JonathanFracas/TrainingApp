<?php

namespace App\Http\Controllers\Running;

use App\Http\Controllers\Controller;
use App\Models\Running\RunningSession;
use Illuminate\Http\Request;

class RunningSessionsController extends Controller
{
    public function save(Request $request)
    {
        $runningSession = new RunningSession(($request->input()));
        $runningSession->save();
    }
}
