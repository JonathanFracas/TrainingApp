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
        DB::statement('DROP VIEW last_musculations_session');

        DB::statement(
            'CREATE VIEW last_musculations_session AS
				SELECT
    			me.body_part_id,
    			IFNULL(MAX(ms.session_number), 0) AS last_session_number,
    			IF(MAX(ms.session_number) IS NOT NULL, MAX(date), NULL) AS last_session_date
				FROM
    			musculation_sessions ms
				RIGHT JOIN musculation_exercises me ON ms.musculation_exercise_id = me.id
				GROUP BY
    			me.body_part_id;'
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
