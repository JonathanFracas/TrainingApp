<?php

namespace App\Processing\Calendar;

use App\Models\Session\SessionView;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class ToutHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = SessionView::class;
    }

    protected function applyFilters(Builder $query)
    {
        return $query;
    }
}
