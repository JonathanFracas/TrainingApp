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
        DB::statement(
            'CREATE VIEW last_musculations_session AS
				SELECT
    			me.body_part_id,
    			MAX(ms.session_number) AS last_session_number
				FROM
    			musculation_sessions ms
				JOIN
    			musculation_exercises me
    		ON ms.musculation_exercise_id = me.id
				GROUP BY
    			me.body_part_id'
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW last_musculations_session');
    }
};
