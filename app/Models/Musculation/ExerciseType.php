<?php

namespace App\Models\Musculation;

use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property string $id -.
 * @property string $label -.
 */
class ExerciseType extends Model
{
    protected $table = 'exercises_types';

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';

    public $timestamps = false;

    /**
     * CONSTANTES
     */
    public const WEIGHT = 'weight';

    public const ELASTIC = 'elastic';

    public const CORE_STRENGTHENING = 'core_strengthening';
}
