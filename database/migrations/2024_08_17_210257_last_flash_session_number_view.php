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
        DB::statement('DROP VIEW IF EXISTS last_flash_session;');

        DB::statement(
            'CREATE VIEW last_flash_session AS
				SELECT
    			IFNULL(MAX(session_number), 0) AS last_session_number,
    			IF(MAX(session_number) IS NOT NULL, MAX(date), NULL) AS last_session_date
				FROM flash_sessions;'
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
