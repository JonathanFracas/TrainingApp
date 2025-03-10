import * as React from 'react';
import MusculationExercise, {RawMusculationExercise} from "@/Models/Musculation/MusculationExercise";
import MusculationsSession, {RawMusculationsSession} from "@/Models/Musculation/MusculationSession";


export interface RawMusculationSessionExercise
{
	id: number;
	musculation_exercise_id: number;
	series: number;
	repeats: number;
	weight?: number;
	elastic?: string;
	core_strengthening?: number;

	musculation_exercise?: RawMusculationExercise;
	session?: RawMusculationsSession;
}

/**
 * Classe représentant un jeu.
 */
class MusculationSessionExercise implements Parsable<MusculationSessionExercise, RawMusculationSessionExercise>
{
	id?: number;
	musculation_exercise_id: number;
	series: number;
	repeats: number;
	weight?: number;
	elastic?: string;
	core_strengthening?: number;
	musculation_exercise?: MusculationExercise;
	session?: MusculationsSession;

	[key: string]: any;

	constructor()
	{
		this.musculation_exercise_id = -1;
		this.series = 4;
		this.repeats = 10;
		this.date = new Date();

	}


	public parse(rawMusculationSessionExercise: RawMusculationSessionExercise): MusculationSessionExercise
	{
		this.id = rawMusculationSessionExercise.id;
		this.musculation_exercise_id = rawMusculationSessionExercise.musculation_exercise_id;
		this.repeats = rawMusculationSessionExercise.repeats;
		this.series = rawMusculationSessionExercise.series;

		if(rawMusculationSessionExercise.elastic)
			this.elastic = rawMusculationSessionExercise.elastic;
		if(rawMusculationSessionExercise.weight)
			this.weight = rawMusculationSessionExercise.weight;
		if(rawMusculationSessionExercise.core_strengthening)
			this.core_strengthening = rawMusculationSessionExercise.core_strengthening;

		if(rawMusculationSessionExercise.musculation_exercise)
			this.musculation_exercise = (new MusculationExercise()).parse(rawMusculationSessionExercise.musculation_exercise);

		if(rawMusculationSessionExercise.session)
			this.session = (new MusculationsSession()).parse(rawMusculationSessionExercise.session);

		return this;
	}

	public setExercise(musculation_exercise: MusculationExercise)
	{
		this.musculation_exercise = musculation_exercise;
		this.musculation_exercise_id = musculation_exercise.id;
	}

	public static getElastics()
	{
		return ["", "vert", "noir" ];
	}

}

export const EXERCICE_PER_SESSION = 5;

export default MusculationSessionExercise;


