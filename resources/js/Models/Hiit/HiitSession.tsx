import * as React from 'react';
import HiitType, {RawHiitType} from "@/Models/Hiit/HiitType";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";


export interface RawHiitSession
{
	id: number;
	timer: string;
	date: Date;
	high_intensity: string;
	recovery: string;
	hiit_type_id: number;
	repeats: number;

	hiit_type?: RawHiitType;

}

/**
 * Classe représentant un jeu.
 */
class HiitSession implements Parsable<HiitSession, RawHiitSession>
{
	id: number;
	high_intensity: number;
	recovery: number;
	timer: number;
	date: Date;
	hiit_type_id: number;
	repeats: number;

	hiit_type?: HiitType;



	[key: string]: any;

	constructor()
	{
		this.id = -1;
		this.timer = 0;
		this.repeats = 5;
		this.high_intensity = 0;
		this.recovery = 0;
		this.hiit_type_id = -1;
		this.date = new Date();
	}

	public parse(rawHiitSession: RawHiitSession): HiitSession
	{
		this.id = rawHiitSession.id;
		this.repeats = rawHiitSession.repeats;
		this.timer = parseFloat(rawHiitSession.timer);
		this.high_intensity = parseFloat(rawHiitSession.high_intensity);
		this.high_intensity = parseFloat(rawHiitSession.high_intensity);
		this.date = new Date(rawHiitSession.date);
		this.hiit_type_id = rawHiitSession.hiit_type_id;

		if(rawHiitSession.hiit_type)
			this.hiit_type = (new HiitType()).parse(rawHiitSession.hiit_type);
		return this;
	}

	public setType(hiit_type: HiitType)
	{
		this.hiit_type = hiit_type;
		this.hiit_type_id = hiit_type.id;
	}
}

export default HiitSession;


