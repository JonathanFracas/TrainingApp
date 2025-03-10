<?php

namespace App\Models\Musculation;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property int $session_number -.
 * @property Carbon $date -.
 * @property string $body_part_id -.
 *
 * --- RELATIONS ---
 * @property MusculationSessionExercise[] $exercises -.
 * @property BodyPartType $body_part -.
 */
class MusculationSession extends Model
{
    protected $table = 'musculation_sessions';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
    ];

    public function exercises(): HasMany
    {
        return $this->hasMany(MusculationSessionExercise::class, 'session_number', 'session_number');
    }

    public function body_part(): BelongsTo
    {
        return $this->belongsTo(BodyPartType::class, 'body_part_id', 'id');
    }
}
