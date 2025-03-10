<?php

namespace App\Models\Musculation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property int $session_number -.
 * @property int $musculation_exercise_id -.
 * @property int $series -.
 * @property int $repeats -.
 * @property ?float $weight -.
 * @property ?string $elastic -.
 * @property ?int $core_strengthening -.
 *
 * --- RELATIONS ---
 * @property MusculationExercise $musculation_exercise -.
 * @property MusculationSession $session -.
 */
class MusculationSessionExercise extends Model
{
    use HasFactory;

    protected $table = 'musculation_sessions_exercises';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    /**
     * RELATIONS
     */
    public function musculation_exercise(): HasOne
    {
        return $this->hasOne(MusculationExercise::class, 'id', 'musculation_exercise_id');
    }

    public function session(): BelongsTo
    {
        return $this->belongsTo(MusculationSession::class, 'session_number', 'session_number');
    }
}
