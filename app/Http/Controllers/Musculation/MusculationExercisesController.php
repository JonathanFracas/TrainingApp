<?php

namespace App\Http\Controllers\Musculation;

use App\Http\Controllers\Controller;
use App\Models\Musculation\Elastic;
use App\Models\Musculation\MusculationExercise;
use Illuminate\Http\Request;

class MusculationExercisesController extends Controller
{
    public function get(string $bodyPart)
    {
        return MusculationExercise::query()
            ->with('exercise_type')
            ->where('body_part_id', '=', $bodyPart)
            ->get();
    }

    public function save(Request $request)
    {
        $musculationExercise = new MusculationExercise($request->input());
        $musculationExercise->save();
    }

    public function saveElastic(Request $request)
    {
        $elastic = new Elastic($request->input());
        $elastic->save();
    }

    public function getElastics()
    {
        return Elastic::all();
    }
}
