<?php

namespace App\Models\Flash;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * VUE
 *
 * --- CHAMPS BASE DE DONNEES ---
 *
 * @property-read int $last_session_number -.
 * @property-read Carbon $last_session_date -.
 */
class LastFlashSession extends Model
{
    public $timestamps = false;

    protected $table = 'last_flash_session';
}
