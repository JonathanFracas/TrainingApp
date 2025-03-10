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
            "CREATE OR REPLACE VIEW sessions_view AS
				SELECT session_number, date, 'musculation' as type, body_part_id FROM musculation_sessions
				UNION ALL
				SELECT id, date, 'running' as type, null as body_part_id FROM running_sessions
				UNION ALL
				SELECT session_number, date, 'flash' as type, null as body_part_id FROM flash_sessions
				UNION ALL
				SELECT id, date, 'sport' as type, null as body_part_id FROM sports_sessions
        UNION ALL
				SELECT id, date, 'bike' as type, null as body_part_id FROM bike_sessions
        UNION ALL
				SELECT id, date, 'hiit' as type, null as body_part_id FROM hiits_sessions
				;"
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
