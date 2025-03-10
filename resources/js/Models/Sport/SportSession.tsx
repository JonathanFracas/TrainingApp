import * as React from 'react';
import HiitType, {RawHiitType} from "@/Models/Hiit/HiitType";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";
import SportType, {RawSportType} from "@/Models/Sport/SportType";


export interface RawSportSession
{
	id: number;
	time: string;
	date: Date;
	sport_type_id: number;

	sport_type?: RawSportType;

}

/**
 * Classe représentant un jeu.
 */
class SportSession implements Parsable<SportSession, RawSportSession>
{
	id: number;
	time: number;
	date: Date;
	sport_type_id: number;

	sport_type?: SportType;



	[key: string]: any;

	constructor()
	{
		this.id = -1;
		this.time = 0;
		this.sport_type_id = -1;
		this.date = new Date();
	}

	public parse(rawSportSession: RawSportSession): SportSession
	{
		this.id = rawSportSession.id;
		this.time = parseFloat(rawSportSession.time);
		this.date = new Date(rawSportSession.date);
		this.sport_type_id = rawSportSession.sport_type_id;

		if(rawSportSession.sport_type)
			this.sport_type = (new SportType()).parse(rawSportSession.sport_type);
		return this;
	}

	public setType(sportType: SportType)
	{
		this.sport_type = sportType;
		this.sport_type_id = sportType.id;
	}
}

export default SportSession;


