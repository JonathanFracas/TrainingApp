<?php

namespace App\Models\Flash;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property int $exercise_session_number -.
 * @property string $exercise_name -.
 * @property int $repeat -.
 *
 * --- RELATIONS ---
 * @property FlashExercise exercise_type -.
 */
class FlashSessionExercise extends Model
{
    protected $table = 'flash_sessions_exercises';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    public function exercise_type(): HasOne
    {
        return $this->hasOne(FlashExercise::class, 'name', 'exercise_name');
    }
}
