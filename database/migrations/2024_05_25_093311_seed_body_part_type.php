<?php

use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        \DB::table('body_parts_types')->insert([

            [
                'id' => 'arm',
                'label' => 'Bras',
            ],

            [
                'id' => 'back',
                'label' => 'Dos',
            ],

            [
                'id' => 'shoulder',
                'label' => 'Epaule',
            ],

            [
                'id' => 'leg',
                'label' => 'Jambe',
            ],

            [
                'id' => 'pectoral',
                'label' => 'Pecs',
            ],

            [
                'id' => 'abs',
                'label' => 'Abdo',
            ],

            [
                'id' => 'spinal',
                'label' => 'Dos profond',
            ],

        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
