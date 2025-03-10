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
        Schema::table('musculation_exercises', function (Blueprint $table) {
            $table->addColumn('boolean', 'elastic')->default(false);
            $table->addColumn('boolean', 'core_strengthening')->default(false);
        });

        DB::table('musculation_exercises')
            ->where('weight', '=', false)
            ->where('name', '!=', 'Gainage')
            ->update([
                'elastic' => true,
            ]);

        DB::table('musculation_exercises')
            ->where('name', '=', 'Gainage')
            ->update([
                'core_strengthening' => true,
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
