import * as React from 'react';


export interface RawBodyPartType
{
	id: string;
	label: string;
}

/**
 * Classe représentant un jeu.
 */

class BodyPartType implements Parsable<BodyPartType, RawBodyPartType>
{
	id: string;
	label: string;

	constructor()
	{
		this.id = "";
		this.label = "";
	}

	public parse(rawBodyPartType: RawBodyPartType): BodyPartType
	{
		if(rawBodyPartType.id)
			this.id = rawBodyPartType.id;

			this.label = rawBodyPartType.label;

		return this;
	}

}

export const ARM = "arm";
export const BACK = "back";
export const SHOULDER = "shoulder";
export const LEG = "leg";
export const PECTORAL = "pectoral";
export const ABS = "abs";
export const SPINAL = "spinal";

export default BodyPartType;


