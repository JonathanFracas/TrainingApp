<?php

namespace App\Http\Controllers\Historic;

use App\Http\Controllers\Controller;
use App\Models\Bike\BikeSession;
use App\Models\Flash\FlashSession;
use App\Models\Hiit\HiitSession;
use App\Models\Musculation\MusculationSession;
use App\Models\Running\RunningSession;
use App\Models\Sport\SportSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class SessionsHistoricController extends Controller
{
    public function getSessionsByMonth(Request $request)
    {
        $date = new Carbon($request->input('date'));
        $filters = $request->input('filters');

        $className = 'App\\Processing\\Calendar\\'.$filters['type'].'Handler';

        $handler = new $className($date, $filters);

        return $handler->perform();
    }

    private function getSessionsForDate(Carbon $date, string|Model $class, ?array $relations = null)
    {
        $query = $class::query()
            ->whereDate('date', '=', $date);

        if (! empty($relations)) {
            $query->with($relations);
        }

        return $query->get();
    }

    public function getSessionsByDay(Request $request)
    {
        $date = new Carbon($request->input('date'));

        $musculationSessions = $this->getSessionsForDate($date, MusculationSession::class, ['exercises.musculation_exercise', 'body_part']);

        $runningSessions = $this->getSessionsForDate($date, RunningSession::class);
        $runningSessions->append((['speed', 'pace']));

        $flashSessions = $this->getSessionsForDate($date, FlashSession::class, ['exercises']);

        $bikeSessions = $this->getSessionsForDate($date, BikeSession::class);
        $bikeSessions->append((['speed', 'pace']));

        $sportsSessions = $this->getSessionsForDate($date, SportSession::class, ['sport_type']);

        $hiitsSession = $this->getSessionsForDate($date, HiitSession::class, ['hiit_type']);

        return (object)
            [
                'musculations' => $musculationSessions,
                'runnings' => $runningSessions,
                'flashs' => $flashSessions,
                'bikes' => $bikeSessions,
                'sports' => $sportsSessions,
                'hiits' => $hiitsSession,
            ];
    }
}
