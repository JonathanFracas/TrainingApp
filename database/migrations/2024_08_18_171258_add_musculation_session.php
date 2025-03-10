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
        Schema::create('musculation_sessions', function (Blueprint $table) {
            $table->id();
            $table->integer('session_number')->index();
            $table->date('date');
            $table->string('body_part_id');

            $table->foreign('body_part_id')
                ->references('id')->on('body_parts_types');
        });

        $sessions = \App\Models\Musculation\MusculationSessionExercise::query()
            ->get()->groupBy('session_number');

        foreach ($sessions as $session) {
            DB::table('musculation_sessions')->insert([
                [
                    'session_number' => $session[0]->session_number,
                    'date' => $session[0]->date,
                    'body_part_id' => $session[0]->musculation_exercise->body_part_id,
                ],

            ]);

        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
