<?php

namespace App\Processing\Calendar;

use App\Models\Musculation\MusculationSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class MusculationHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = MusculationSession::class;
    }

    public function applyFilters(Builder $query)
    {
        $bodyPart = $this->filters['bodyPart'];

        if ($bodyPart != 'Tout') {
            $query->whereHas('body_part', function ($query) use ($bodyPart) {
                return $query->where('label', '=', $bodyPart);
            });
        }

        return $query;
    }
}
