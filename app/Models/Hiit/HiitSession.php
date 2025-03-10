<?php

namespace App\Models\Hiit;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property float $timer -.
 * @property int $repeats -.
 * @property float $high_intensity -.
 * @property float $recovery -.
 * @property Carbon $date -.
 * @property int $hiit_type_id -.
 *
 * --- RELATIONS ---
 * @property HiitType $hiit_type -.
 */
class HiitSession extends Model
{
    use HasFactory;

    protected $table = 'hiits_sessions';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
    ];

    public function hiit_type(): BelongsTo
    {
        return $this->belongsTo(HiitType::class, 'hiit_type_id', 'id');
    }
}
