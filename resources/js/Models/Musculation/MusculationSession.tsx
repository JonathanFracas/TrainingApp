import * as React from 'react';
import MusculationSessionExercise, {RawMusculationSessionExercise} from "@/Models/Musculation/MusculationSessionExercise";
import FlashSessionExercise from "@/Models/Flash/FlashSessionExercise";
import BodyPartType, {RawBodyPartType} from "@/Models/Musculation/BodyPartType";


export interface RawMusculationsSession
{
	id: number;
	body_part_id: string;
	session_number: number;
	date: string;

	exercises?: RawMusculationSessionExercise[];
	body_part?: RawBodyPartType;
}


class MusculationsSession implements Parsable<MusculationsSession, RawMusculationsSession>
{
	id: number;
	body_part_id: string;
	session_number: number;
	date: Date;
	exercises?: MusculationSessionExercise[];
	body_part?: BodyPartType;


	constructor()
	{
		this.body_part_id = "";
		this.session_number = -1;
		this.date = new Date();
		this.id = -1;
	}

	public parse(rawMusculationsSession: RawMusculationsSession): MusculationsSession
	{
		this.body_part_id = rawMusculationsSession.body_part_id;
		this.session_number = rawMusculationsSession.session_number;
		this.id = rawMusculationsSession.id;
		this.date = new Date(rawMusculationsSession.date)

		if(rawMusculationsSession.exercises)
			this.exercises = rawMusculationsSession.exercises.map((exercise) => (new MusculationSessionExercise()).parse(exercise))

		if(rawMusculationsSession.body_part)
			this.body_part = (new BodyPartType()).parse(rawMusculationsSession.body_part);

		return this;
	}

}

export default MusculationsSession;


