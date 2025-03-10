<?php

namespace App\Http\Controllers\Flash;

use App\Http\Controllers\Controller;
use App\Models\Flash\FlashSession;
use App\Models\Flash\FlashSessionExercise;
use App\Models\Flash\LastFlashSession;
use Carbon\Carbon;
use Illuminate\Http\Request;

class FlashSessionsController extends Controller
{
    public function save(Request $request)
    {
        /**
         * @var LastFlashSession $lastSession
         */
        $lastSession = LastFlashSession::query()->first();

        $date = ($request->collect())['date'];

        $flashSession = new FlashSession;
        $flashSession->date = new Carbon($date);
        $flashSession->session_number = ($lastSession->last_session_number + 1);
        $flashSession->save();

        $sessions = ($request->collect())['session'];
        foreach ($sessions as $sessionExercise) {
            $flashSessionExercise = new FlashSessionExercise($sessionExercise);
            $flashSessionExercise->exercise_session_number = $flashSession->session_number;
            $flashSessionExercise->save();
        }
    }
}
