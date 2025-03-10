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
        Schema::create('hiits_types', function (Blueprint $table) {
            $table->id()->index();
            $table->string('label');
        });

        Schema::create('hiits_sessions', function (Blueprint $table) {
            $table->id()->index();
            $table->date('date');
            $table->integer('repeats');
            $table->decimal('timer');
            $table->decimal('high_intensity');
            $table->decimal('recovery');

            $table->unsignedBigInteger('hiit_type_id');

            $table->foreign('hiit_type_id')
                ->references('id')->on('hiits_types');
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
