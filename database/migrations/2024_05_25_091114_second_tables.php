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
        Schema::create('flash_sessions', function (Blueprint $table) {
            $table->id();
            $table->integer('session_number');
            $table->unsignedBigInteger('flash_exercise_id');
            $table->integer('repeats');
            $table->date('date');

            $table->foreign('flash_exercise_id')
                ->references('id')->on('flash_exercises');
        });

        Schema::create('running_sessions', function (Blueprint $table) {
            $table->id();
            $table->decimal('kms');
            $table->decimal('time');
            $table->date('date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flash_sessions');
        Schema::dropIfExists('running_sessions');

    }
};
