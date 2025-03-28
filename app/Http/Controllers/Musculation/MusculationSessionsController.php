<?php

namespace App\Http\Controllers\Musculation;

use App\Http\Controllers\Controller;
use App\Models\Musculation\BodyPartType;
use App\Models\Musculation\LastMusculationsSession;
use App\Models\Musculation\MusculationSession;
use App\Models\Musculation\MusculationSessionExercise;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MusculationSessionsController extends Controller
{
    public function save(Request $request)
    {
        /**
         * @var MusculationSessionExercise $lastSession
         */
        $lastSession = MusculationSession::query()->orderBy('id', 'DESC')->first();

        if (empty($lastSession)) {
            $sessionNumber = 1;
        } else {
            $sessionNumber = $lastSession->session_number + 1;
        }

        $sessions = ($request->collect())['session'];
        $date = ($request->collect())['date'];
        $body_part_id = ($request->collect())['body_part_id'];

        $musculationSession = new MusculationSession;
        $musculationSession->date = new Carbon($date);
        $musculationSession->session_number = $sessionNumber;
        $musculationSession->body_part_id = $body_part_id;

        $musculationSession->save();

        foreach ($sessions as $session) {
            $musculationSessionExercise = new MusculationSessionExercise($session);
            $musculationSessionExercise->session_number = $sessionNumber;
            $musculationSessionExercise->save();
        }
    }

    public function copyLastSession(string $body_part_id)
    {
        /**
         * @var LastMusculationsSession $last_session_number
         */
        $last_session_number = LastMusculationsSession::query()
            ->where('body_part_id', '=', $body_part_id)
            ->first();

        return MusculationSessionExercise::query()
            ->with('musculation_exercise')
            ->where('session_number', '=', $last_session_number->last_session_number)
            ->get();
    }

    public function copyBySessionNumber(int $sessionNumber)
    {
        /**
         * @var MusculationSession $musculationSession
         */
        $musculationSession = MusculationSession::query()
            ->where('session_number', '=', $sessionNumber)
            ->first();

        $bodyPart = BodyPartType::query()->find($musculationSession->body_part_id);

        $exercises = MusculationSessionExercise::query()
            ->with('musculation_exercise')
            ->where('session_number', '=', $sessionNumber)
            ->get();

        return (object) [
            'exercises' => $exercises,
            'body_part' => $bodyPart,
        ];
    }
}
