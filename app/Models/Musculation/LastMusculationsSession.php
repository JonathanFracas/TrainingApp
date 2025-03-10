<?php

namespace App\Models\Musculation;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * VUE
 *
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property-read string $body_part_id;
 * @property-read int $last_session_number;
 * @property-read Carbon $last_session_date -.
 */
class LastMusculationsSession extends Model
{
    public $timestamps = false;

    protected $table = 'last_musculations_session';
}
