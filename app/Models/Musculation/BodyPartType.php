<?php

namespace App\Models\Musculation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property string $id - .
 * @property string $label - .
 */
class BodyPartType extends Model
{
    use HasFactory;

    protected $table = 'body_parts_types';

    protected $primaryKey = 'id';

    public $incrementing = false;

    protected $keyType = 'string';

    public $timestamps = false;

    /**
     * CONSTANTES
     */
    public const ARM = 'arm';

    public const BACK = 'back';

    public const SHOULDER = 'shoulder';

    public const LEG = 'leg';

    public const PECTORAL = 'pectoral';

    public const ABS = 'abs';

    public const SPINAL = 'spinal';
}
