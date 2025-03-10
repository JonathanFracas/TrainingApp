<?php

namespace App\Processing\Calendar;

use App\Models\Hiit\HiitSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class FractionneHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = HiitSession::class;
    }

    protected function applyFilters(Builder $query)
    {
        $hiitType = $this->filters['hiitType'];

        if ($hiitType != 'Tout') {
            $query->whereHas('sport_type', function ($query) use ($hiitType) {
                return $query->where('label', '=', $hiitType);
            });
        }

        return $query;
    }
}
