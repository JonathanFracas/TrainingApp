<?php

namespace App\Models\Sport;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property string $label -.
 */
class SportType extends Model
{
    use HasFactory;

    protected $table = 'sports_types';

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
    ];
}
