<?php

namespace App\Processing\Calendar;

use App\Models\Running\RunningSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class RunningHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = RunningSession::class;
    }

    protected function applyFilters(Builder $query)
    {
        return $query;
    }
}
