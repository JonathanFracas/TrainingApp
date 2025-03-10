<?php

namespace App\Processing\Calendar;

use App\Models\Sport\SportSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class SportHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = SportSession::class;
    }

    protected function applyFilters(Builder $query)
    {
        $sportType = $this->filters['sportType'];

        if ($sportType != 'Tout') {
            $query->whereHas('sport_type', function ($query) use ($sportType) {
                return $query->where('label', '=', $sportType);
            });
        }

        return $query;
    }
}
