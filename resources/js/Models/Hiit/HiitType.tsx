import * as React from 'react';


export interface RawHiitType
{
	id: number;
	label: string;
}

/**
 * Classe représentant un jeu.
 */
class HiitType implements Parsable<HiitType, RawHiitType>
{
	id: number;
	label: string;

	constructor()
	{
		this.id = -1;
		this.label = "";
	}

	public parse(rawHiitType: RawHiitType): HiitType
	{
		this.id = rawHiitType.id;

		this.label = rawHiitType.label;

		return this;
	}

	get isValid(): boolean
	{
		return this.label.trim() != "";
	}

}

export default HiitType;


