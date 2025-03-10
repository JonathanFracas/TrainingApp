<?php

namespace App\Processing\Calendar;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class FilterHandler
{
    protected Carbon $date;

    protected array $filters;

    protected string|Model $class;

    public function __construct(Carbon $date, array $filters)
    {
        $this->date = $date;
        $this->filters = $filters;
    }

    protected function getMonthYearQuery()
    {
        return $this->class::query()
            ->whereYear('date', $this->date->year)
            ->whereMonth('date', $this->date->month);
    }

    protected function getDays(Builder $query)
    {
        $days = $query->get()->map(function ($session) {
            return $session->date->day;
        });

        return $days->unique()->sort()->flatten();
    }

    abstract protected function applyFilters(Builder $query);

    public function perform()
    {
        $query = $this->getMonthYearQuery();

        $query = $this->applyFilters($query);

        return $this->getDays($query);
    }
}
