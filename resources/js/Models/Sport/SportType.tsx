import * as React from 'react';


export interface RawSportType
{
	id: number;
	label: string;
}

/**
 * Classe représentant un jeu.
 */
class SportType implements Parsable<SportType, RawSportType>
{
	id: number;
	label: string;

	constructor()
	{
		this.id = -1;
		this.label = "";
	}

	public parse(rawSportType: RawSportType): SportType
	{
		this.id = rawSportType.id;

		this.label = rawSportType.label;

		return this;
	}

	get isValid(): boolean
	{
		return this.label.trim() != "";
	}

}

export default SportType;


