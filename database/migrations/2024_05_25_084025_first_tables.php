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
        Schema::create('body_parts_types', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('label');
        });

        Schema::create('musculation_exercises', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('body_part_id');
            $table->boolean('weight');

            $table->foreign('body_part_id')
                ->references('id')->on('body_parts_types');
        });

        Schema::create('flash_exercises', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('musculation_sessions', function (Blueprint $table) {
            $table->id();
            $table->integer('session_number');
            $table->unsignedBigInteger('musculation_exercise_id');
            $table->integer('series');
            $table->integer('repeats');
            $table->decimal('weight')->nullable();
            $table->string('elastic')->nullable();
            $table->date('date');

            $table->foreign('musculation_exercise_id')
                ->references('id')->on('musculation_exercises');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('musculation_sessions');
        Schema::dropIfExists('flash_exercises');
        Schema::dropIfExists('musculation_exercises');
        Schema::dropIfExists('body_parts_types');

    }
};
