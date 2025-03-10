<?php

namespace App\Models\Session;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * VUE
 *
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property-read string $body_part_id;
 * @property-read string $type;
 * @property-read int $session_number;
 * @property-read Carbon $date -.
 */
class SessionView extends Model
{
    public $timestamps = false;

    protected $table = 'sessions_view';

    protected $casts = [
        'date' => 'date',
    ];
}
