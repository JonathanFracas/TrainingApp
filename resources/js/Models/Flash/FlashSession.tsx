import FlashSessionExercise, {RawFlashSessionExercise} from "@/Models/Flash/FlashSessionExercise";


export interface RawFlashSession
{
	id: number;
	session_number: number;
	date: Date;

	exercises?: RawFlashSessionExercise[];
}

/**
 * Classe représentant un jeu.
 */
class FlashSession implements Parsable<FlashSession, RawFlashSession>
{

	id: number;
	session_number: number;
	date: Date;
	exercises?: FlashSessionExercise[];

	[key: string]: any;
	constructor()
	{
		this.id = -1;
		this.session_number = -1;
		this.date = new Date();
	}

	public parse(rawFlashSession: RawFlashSession): FlashSession
	{
		this.id = rawFlashSession.id;
		this.session_number = rawFlashSession.session_number;
		this.date = new Date(rawFlashSession.date);

		if(rawFlashSession.exercises)
			this.exercises = rawFlashSession.exercises.map((exercise) => (new FlashSessionExercise()).parse(exercise))

		return this;
	}

}

export const NB_EXERCISES = 10;

export default FlashSession;


