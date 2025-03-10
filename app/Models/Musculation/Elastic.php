<?php

namespace App\Models\Musculation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property string $id - .
 * @property string $color - .
 */
class Elastic extends Model
{
    use HasFactory;

    protected $table = 'elastics';

    protected $primaryKey = 'id';

    public $incrementing = true;

    protected $keyType = 'int';

    public $timestamps = false;

    protected $guarded = ['id'];
}
