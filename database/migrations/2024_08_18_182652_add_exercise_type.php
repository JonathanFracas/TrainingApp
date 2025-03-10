<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('exercises_types')->insert([
            [
                'id' => 'body_weight',
                'label' => 'Poids de corps',
            ],
        ]);

        DB::table('musculation_exercises')
            ->whereIn('name', ['Rameur', 'Boxeur', 'Crunch', 'Rotation', 'Overhead squat', 'Developpé nuque ventre', 'Developpé nuque assis', 'Parachutiste'])
            ->update([
                'exercise_type_id' => 'body_weight',
            ]);

        DB::table('musculation_exercises')
            ->whereIn('name', ['Twist'])
            ->update([
                'exercise_type_id' => 'weight',
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
