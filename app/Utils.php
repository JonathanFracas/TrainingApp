<?php

namespace App;

class Utils
{
    public static function getSpeed(float $kms, float $time)
    {
        return round(($kms / ($time / 60.0)), 2);
    }

    public static function getPace(float $kms, float $time)
    {
        return round(($time / $kms), 2);
    }
}
