<?php

namespace App\Processing\Calendar;

use App\Models\Bike\BikeSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class VeloHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = BikeSession::class;
    }

    protected function applyFilters(Builder $query)
    {
        return $query;
    }
}
