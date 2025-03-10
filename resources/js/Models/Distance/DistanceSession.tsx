export interface RawDistanceSession
{
	id: number;
	kms: number;
	time: number;
	date: string;
	speed?: string;
	pace?: string;
}


/**
 * Classe représentant un jeu.
 */
abstract class DistanceSession implements Parsable<DistanceSession, RawDistanceSession>
{
	id: number;
	kms: number;
	time: number;
	date: Date;

	speed?: number;
	pace?: number;

	[key: string]: any;

	constructor()
	{
		this.id = -1;
		this.kms = 0;
		this.time = 0;
		this.date = new Date();
	}

	public parse(rawDistanceSession: RawDistanceSession): DistanceSession
	{
		this.id = rawDistanceSession.id;
		this.kms = rawDistanceSession.kms;
		this.time = rawDistanceSession.time;
		this.date = new Date(rawDistanceSession.date);

		if(rawDistanceSession.speed)
			this.speed = parseFloat(rawDistanceSession.speed)

		if(rawDistanceSession.pace)
			this.pace = parseFloat(rawDistanceSession.pace);

		return this;
	}
}

export default DistanceSession;


