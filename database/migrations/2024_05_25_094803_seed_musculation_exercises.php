<?php

use App\Models\Musculation\BodyPartType;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        \DB::table('musculation_exercises')->insert([

            [
                'name' => 'Avant bras',
                'body_part_id' => BodyPartType::ARM,
                'weight' => true,
            ],

            [
                'name' => 'Biceps elastique',
                'body_part_id' => BodyPartType::ARM,
                'weight' => false,
            ],

            [
                'name' => 'Curl biceps',
                'body_part_id' => BodyPartType::ARM,
                'weight' => true,
            ],

            [
                'name' => 'Curl marteau',
                'body_part_id' => BodyPartType::ARM,
                'weight' => true,
            ],

            [
                'name' => 'Triceps elastique',
                'body_part_id' => BodyPartType::ARM,
                'weight' => false,
            ],

            [
                'name' => 'Triceps extension horizontale',
                'body_part_id' => BodyPartType::ARM,
                'weight' => true,
            ],

            [
                'name' => 'Triceps extension verticale',
                'body_part_id' => BodyPartType::ARM,
                'weight' => true,
            ],

            [
                'name' => 'Tirage bucheron',
                'body_part_id' => BodyPartType::BACK,
                'weight' => true,
            ],

            [
                'name' => 'Soulevé de terre',
                'body_part_id' => BodyPartType::BACK,
                'weight' => true,
            ],

            [
                'name' => 'Scapulaire',
                'body_part_id' => BodyPartType::BACK,
                'weight' => false,
            ],

            [
                'name' => 'Rowing',
                'body_part_id' => BodyPartType::BACK,
                'weight' => false,
            ],

            [
                'name' => 'Lombaires',
                'body_part_id' => BodyPartType::BACK,
                'weight' => false,
            ],

            [
                'name' => 'Ecarté debout',
                'body_part_id' => BodyPartType::BACK,
                'weight' => false,
            ],

            [
                'name' => 'Overhead squat',
                'body_part_id' => BodyPartType::SPINAL,
                'weight' => false,
            ],

            [
                'name' => 'Developpé nuque ventre',
                'body_part_id' => BodyPartType::SPINAL,
                'weight' => false,
            ],

            [
                'name' => 'Developpé nuque assis',
                'body_part_id' => BodyPartType::SPINAL,
                'weight' => false,
            ],

            [
                'name' => 'Parachutiste',
                'body_part_id' => BodyPartType::SPINAL,
                'weight' => false,
            ],

            [
                'name' => 'Shrug',
                'body_part_id' => BodyPartType::SHOULDER,
                'weight' => true,
            ],

            [
                'name' => 'Oiseau halteres',
                'body_part_id' => BodyPartType::SHOULDER,
                'weight' => true,
            ],

            [
                'name' => 'Elevation laterale',
                'body_part_id' => BodyPartType::SHOULDER,
                'weight' => false,
            ],

            [
                'name' => 'Elevation frontale',
                'body_part_id' => BodyPartType::SHOULDER,
                'weight' => true,
            ],

            [
                'name' => 'Developpé militaire',
                'body_part_id' => BodyPartType::SHOULDER,
                'weight' => true,
            ],

            [
                'name' => 'Squat',
                'body_part_id' => BodyPartType::LEG,
                'weight' => true,
            ],

            [
                'name' => 'Quadriceps elastique',
                'body_part_id' => BodyPartType::LEG,
                'weight' => false,
            ],

            [
                'name' => 'Triceps poids',
                'body_part_id' => BodyPartType::LEG,
                'weight' => true,
            ],

            [
                'name' => 'Ischio elastique',
                'body_part_id' => BodyPartType::LEG,
                'weight' => false,
            ],

            [
                'name' => 'Elevation genou',
                'body_part_id' => BodyPartType::LEG,
                'weight' => false,
            ],

            [
                'name' => 'Adducteurs elastique',
                'body_part_id' => BodyPartType::LEG,
                'weight' => false,
            ],

            [
                'name' => 'Abducteurs elastique',
                'body_part_id' => BodyPartType::LEG,
                'weight' => false,
            ],

            [
                'name' => 'Pullover',
                'body_part_id' => BodyPartType::PECTORAL,
                'weight' => true,
            ],

            [
                'name' => 'Ecarté',
                'body_part_id' => BodyPartType::PECTORAL,
                'weight' => true,
            ],

            [
                'name' => 'Debout elastique',
                'body_part_id' => BodyPartType::PECTORAL,
                'weight' => false,
            ],

            [
                'name' => 'Couché poids',
                'body_part_id' => BodyPartType::PECTORAL,
                'weight' => true,
            ],

            [
                'name' => 'Developpé couché',
                'body_part_id' => BodyPartType::PECTORAL,
                'weight' => true,
            ],

            [
                'name' => 'Rameur',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

            [
                'name' => 'Twist',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

            [
                'name' => 'Boxeur',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

            [
                'name' => 'Crunch',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

            [
                'name' => 'Gainage',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

            [
                'name' => 'Rotation',
                'body_part_id' => BodyPartType::ABS,
                'weight' => false,
            ],

        ]);

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
