<?php

namespace App\Models\Flash;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property int $session_number -.
 * @property Carbon $date -.
 *
 * --- RELATIONS ---
 * @property FlashSessionExercise $exercises -.
 */
class FlashSession extends Model
{
    use HasFactory;

    protected $table = 'flash_sessions';

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
        return $this->hasMany(FlashSessionExercise::class, 'exercise_session_number', 'session_number');
    }
}
