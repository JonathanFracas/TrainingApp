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
        Schema::create('flash_exercises', function (Blueprint $table) {
            $table->string('name')->primary();
        });

        \DB::table('flash_exercises')->insert([

            [
                'name' => 'Pompe',
            ],

            [
                'name' => 'Flexion extension',
            ],

            [
                'name' => 'Abdo boxeur',
            ],

            [
                'name' => 'Fente',
            ],

            [
                'name' => 'Crunch',
            ],

            [
                'name' => 'Abdo rameur',
            ],

            [
                'name' => 'Mixe',
            ],

        ]);

        Schema::create('flash_sessions', function (Blueprint $table) {
            $table->id();
            $table->string('exo1');
            $table->integer('exo1_repeat');
            $table->string('exo2');
            $table->integer('exo2_repeat');
            $table->string('exo3');
            $table->integer('exo3_repeat');
            $table->string('exo4');
            $table->integer('exo4_repeat');
            $table->string('exo5');
            $table->integer('exo5_repeat');
            $table->string('exo6');
            $table->integer('exo6_repeat');
            $table->string('exo7');
            $table->integer('exo7_repeat');
            $table->string('exo8');
            $table->integer('exo8_repeat');
            $table->string('exo9');
            $table->integer('exo9_repeat');
            $table->string('exo10');
            $table->integer('exo10_repeat');

            $table->foreign('exo1')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo2')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo3')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo4')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo5')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo6')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo7')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo8')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo9')
                ->references('name')->on('flash_exercises');
            $table->foreign('exo10')
                ->references('name')->on('flash_exercises');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
