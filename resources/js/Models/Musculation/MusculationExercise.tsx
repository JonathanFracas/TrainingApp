import * as React from 'react';
import ExerciseType, {RawExerciseType} from "@/Models/Musculation/ExerciseType";
import BodyPartType, {RawBodyPartType} from "@/Models/Musculation/BodyPartType";


export interface RawMusculationExercise
{

	id: number;
	name: string;
	body_part_id: string;
	exercise_type_id: string;

	exercise_type: RawExerciseType;
	body_part_type: RawBodyPartType;
}

/**
 * Classe représentant un jeu.
 */
class MusculationExercise implements Parsable<MusculationExercise, RawMusculationExercise>
{
	id: number;
	name: string;
	body_part_id: string;
	exercise_type_id: string;

	exercise_type: ExerciseType;
	body_part_type: BodyPartType;

	constructor()
	{
		this.id = -1;
		this.name = "";
		this.body_part_id = "";
		this.exercise_type_id = "";
		this.exercise_type = new ExerciseType();
		this.body_part_type = new BodyPartType();
	}


	public parse(rawMusculationExercise: RawMusculationExercise): MusculationExercise
	{

		this.id = rawMusculationExercise.id
		this.name = rawMusculationExercise.name;
		this.exercise_type_id = rawMusculationExercise.exercise_type_id;
		this.body_part_id = rawMusculationExercise.body_part_id;

		if(rawMusculationExercise.exercise_type)
			this.exercise_type = (new ExerciseType()).parse(rawMusculationExercise.exercise_type);

		if(rawMusculationExercise.body_part_type)
			this.body_part_type = (new BodyPartType()).parse(rawMusculationExercise.body_part_type)

		return this;
	}

	get isValid(): boolean
	{
		return this.name.trim() != "" && this.exercise_type_id.trim() != "" && this.body_part_id.trim() != "";
	}

}

export default MusculationExercise;


