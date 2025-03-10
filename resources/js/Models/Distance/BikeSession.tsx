import * as React from 'react';
import DistanceSession, {RawDistanceSession} from "@/Models/Distance/DistanceSession";


export interface RawBikeSession extends RawDistanceSession
{

}

/**
 * Classe représentant un jeu.
 */
class BikeSession extends DistanceSession
{


	[key: string]: any;

	constructor()
	{
		super();
	}

	public parse(rawBikeSession: RawBikeSession): BikeSession
	{
		super.parse(rawBikeSession);

		return this;
	}
}

export default BikeSession;


