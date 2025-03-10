import * as React from 'react';
import FlashSessionExercisesOrder from "@/Models/Flash/FlashSessionExercisesOrder";


export interface RawFlashSessionExercise
{
	id: number;
	exercise_session_number: number;
	exercise_name: string;
	repeat: number;

}

/**
 * Classe représentant un jeu.
 */
class FlashSessionExercise implements Parsable<FlashSessionExercise, RawFlashSessionExercise>
{
	id: number;
	exercise_session_number: number;
	exercise_name: string;
	repeat: number;

	[key: string]: any;
	constructor()
	{
		this.id = -1;
		this.exercise_session_number = -1;
		this.exercise_name = "";
		this.repeat = 10;
	}

	public parse(rawFlashExercise: RawFlashSessionExercise): FlashSessionExercise
	{
		this.id = rawFlashExercise.id;
		this.exercise_name = rawFlashExercise.exercise_name;
		this.exercise_session_number = rawFlashExercise.exercise_session_number;
		this.repeat = rawFlashExercise.repeat;
		return this;
	}

}

export default FlashSessionExercise;


