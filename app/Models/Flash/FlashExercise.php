<?php

namespace App\Models\Flash;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property string $name -.
 */
class FlashExercise extends Model
{
    use HasFactory;

    protected $table = 'flash_exercises';

    protected $primaryKey = 'string';

    public $incrementing = false;

    protected $keyType = 'string';

    public $timestamps = false;
}
