<?php

namespace App\Models\Flash;

use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property int $order -.
 * @property string $exercise_name -.
 */
class FlashSessionExercisesOrder extends Model
{
    protected $table = 'flash_sessions_exercises_order';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];
}
