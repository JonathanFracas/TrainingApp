<?php

namespace App\Http\Controllers\Musculation;

use App\Http\Controllers\Controller;
use App\Models\Musculation\ExerciseType;

class ExerciseTypesController extends Controller
{
    public function get()
    {
        return ExerciseType::all();
    }
}
