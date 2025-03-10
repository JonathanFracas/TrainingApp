<?php

namespace App\Processing\Calendar;

use App\Models\Flash\FlashSession;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class FlashHandler extends FilterHandler
{
    public function __construct(Carbon $date, array $filters)
    {
        parent::__construct($date, $filters);
        $this->class = FlashSession::class;
    }

    protected function applyFilters(Builder $query)
    {
        return $query;
    }
}
