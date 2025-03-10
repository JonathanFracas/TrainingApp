import * as React from 'react';
import DistanceSession, {RawDistanceSession} from "@/Models/Distance/DistanceSession";


export interface RawRunningSession extends RawDistanceSession
{

}

/**
 * Classe représentant un jeu.
 */
class RunningSession extends DistanceSession
{

	[key: string]: any;

	constructor()
	{
		super();
	}

	public parse(rawRunningSession: RawRunningSession): RunningSession
	{
		super.parse(rawRunningSession)

		return this;
	}
}

export default RunningSession;


