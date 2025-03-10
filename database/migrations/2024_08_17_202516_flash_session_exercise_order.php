<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flash_sessions_exercises_order', function (Blueprint $table) {
            $table->id();
            $table->integer('order');
            $table->string('exercise_name');

            $table->foreign('exercise_name')
                ->references('name')->on('flash_exercises');
        });

        \DB::table('flash_sessions_exercises_order')->insert([

            [
                'order' => 1,
                'exercise_name' => 'Pompe',
            ],

            [
                'order' => 2,
                'exercise_name' => 'Flexion extension',
            ],

            [
                'order' => 3,
                'exercise_name' => 'Abdo boxeur',
            ],

            [
                'order' => 4,
                'exercise_name' => 'Pompe',
            ],

            [
                'order' => 5,
                'exercise_name' => 'Fente',
            ],

            [
                'order' => 6,
                'exercise_name' => 'Crunch',
            ],

            [
                'order' => 7,
                'exercise_name' => 'Pompe',
            ],

            [
                'order' => 8,
                'exercise_name' => 'Flexion extension',
            ],

            [
                'order' => 9,
                'exercise_name' => 'Abdo rameur',
            ],

            [
                'order' => 10,
                'exercise_name' => 'Mixe',
            ],

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
