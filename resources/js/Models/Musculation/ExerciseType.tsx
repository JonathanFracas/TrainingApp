import * as React from 'react';


export interface RawExerciseType
{
	id: string;
	label: string;
}

/**
 * Classe représentant un jeu.
 */
class ExerciseType implements Parsable<ExerciseType, RawExerciseType>
{
	id: string;
	label: string;

	constructor()
	{
		this.id = "";
		this.label = "";
	}

	public parse(rawExerciseType: RawExerciseType): ExerciseType
	{
		if(rawExerciseType.id)
			this.id = rawExerciseType.id;

		this.label = rawExerciseType.label;

		return this;
	}

}

export enum ExercisesTypes
{
	WEIGHT = "weight",
	ELASTIC = "elastic",
	CORE_STRENGTHENING = "core_strengthening",
}

export default ExerciseType;


