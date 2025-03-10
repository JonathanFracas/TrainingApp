<?php

namespace App\Http\Controllers\Flash;

use App\Http\Controllers\Controller;
use App\Models\Flash\FlashExercise;
use App\Models\Flash\FlashSessionExercisesOrder;

class FlashExercisesController extends Controller
{
    public function get()
    {
        return FlashExercise::all();
    }

    public function getExercisesOrder()
    {
        return FlashSessionExercisesOrder::query()
            ->orderBy('order', 'asc')
            ->get();
    }
}
