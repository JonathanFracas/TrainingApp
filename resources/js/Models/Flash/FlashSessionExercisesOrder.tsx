import * as React from 'react';
import FlashSessionExercise from "@/Models/Flash/FlashSessionExercise";


export interface RawFlashSessionExercisesOrder
{
	id: number;
	order: number;
	exercise_name: string;
}

/**
 * Classe représentant un jeu.
 */
class FlashSessionExercisesOrder implements Parsable<FlashSessionExercisesOrder, RawFlashSessionExercisesOrder>
{
	id: number;
	order: number;
	exercise_name: string;
	constructor()
	{
		this.id = -1;
		this.order = -1;
		this.exercise_name = "";
	}

	public parse(rawFlashSessionExercisesOrder: RawFlashSessionExercisesOrder): FlashSessionExercisesOrder
	{
		this.id = rawFlashSessionExercisesOrder.id;
		this.exercise_name = rawFlashSessionExercisesOrder.exercise_name;
		this.order = rawFlashSessionExercisesOrder.order;
		return this;
	}

}

export default FlashSessionExercisesOrder;


