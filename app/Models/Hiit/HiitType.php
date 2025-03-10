<?php

namespace App\Models\Hiit;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property int $id -.
 * @property string $label -.
 */
class HiitType extends Model
{
    use HasFactory;

    protected $table = 'hiits_types';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'integer';

    public $timestamps = false;

    protected $guarded = ['id'];

    protected $casts = [
        'date' => 'date',
    ];
}
