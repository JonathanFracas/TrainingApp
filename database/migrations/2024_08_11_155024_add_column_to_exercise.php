<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('last_musculations_sessions');

        Schema::create('exercises_types', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('label');
        });

        DB::table('exercises_types')->insert([

            [
                'id' => 'weight',
                'label' => 'Poids',
            ],

            [
                'id' => 'elastic',
                'label' => 'Elastique',
            ],

            [
                'id' => 'core_strengthening',
                'label' => 'Gainage',
            ],

        ]);

        Schema::table('musculation_exercises', function (Blueprint $table) {
            $table->string('exercise_type_id')->nullable(true);

            $table->foreign('exercise_type_id')
                ->references('id')->on('exercises_types');
        });

        DB::table('musculation_exercises')
            ->where('weight', '=', true)
            ->update([
                'exercise_type_id' => 'weight',
            ]);

        DB::table('musculation_exercises')
            ->where('elastic', '=', true)
            ->update([
                'exercise_type_id' => 'elastic',
            ]);

        DB::table('musculation_exercises')
            ->where('core_strengthening', '=', true)
            ->update([
                'exercise_type_id' => 'core_strengthening',
            ]);

        Schema::table('musculation_exercises', function (Blueprint $table) {
            $table->dropColumn('weight');
            $table->dropColumn('elastic');
            $table->dropColumn('core_strengthening');

            $table->string('exercise_type_id')->nullable(false)->change();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('exercise', function (Blueprint $table) {
            //
        });
    }
};
