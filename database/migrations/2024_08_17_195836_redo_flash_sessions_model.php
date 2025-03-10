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
        Schema::dropIfExists('flash_sessions');

        Schema::create('flash_sessions', function (Blueprint $table) {
            $table->id();
            $table->integer('session_number')->unique();
            $table->date('date');
        });

        Schema::create('flash_sessions_exercises', function (Blueprint $table) {
            $table->id();
            $table->integer('exercise_session_number');
            $table->string('exercise_name');

            $table->foreign('exercise_name')
                ->references('name')->on('flash_exercises');

            $table->foreign('exercise_session_number')
                ->references('session_number')->on('flash_sessions');
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
