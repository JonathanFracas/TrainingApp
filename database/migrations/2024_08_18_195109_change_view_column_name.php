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
        DB::statement('DROP VIEW if exists last_musculations_session');

        DB::statement(
            'CREATE VIEW last_musculations_session AS
				SELECT
    			bpt.id AS body_part_id,
    			IFNULL(MAX(ms.session_number), 0) AS last_session_number,
    			IF(MAX(ms.session_number) IS NOT NULL, MAX(date), NULL) AS last_session_date
				FROM
					body_parts_types bpt
				LEFT JOIN musculation_sessions ms ON ms.body_part_id = bpt.id
				GROUP BY
    			bpt.id;'
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
