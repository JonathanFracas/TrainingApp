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
        Schema::create('sports_types', function (Blueprint $table) {
            $table->id()->index();
            $table->string('label');
        });

        Schema::create('sports_sessions', function (Blueprint $table) {
            $table->id()->index();
            $table->date('date');
            $table->decimal('time');

            $table->unsignedBigInteger('sport_type_id');

            $table->foreign('sport_type_id')
                ->references('id')->on('sports_types');
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
