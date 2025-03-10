<?php

namespace App\Http\Controllers\Musculation;

use App\Http\Controllers\Controller;
use App\Models\Musculation\BodyPartType;

class BodyPartsController extends Controller
{
    public function get()
    {
        return BodyPartType::all();
    }
}
