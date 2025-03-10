<?php

namespace App\Models\Sport;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property Carbon $date -.
 * @property float $time -.
 * @property int $sport_type_id -.
 *
 * --- RELATIONS ---
 * @property SportType $sport_type -.
 */
class SportSession extends Model
{
    use HasFactory;

    protected $table = 'sports_sessions';

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
    ];

    public function sport_type(): BelongsTo
    {
        return $this->belongsTo(SportType::class, 'sport_type_id', 'id');
    }
}
