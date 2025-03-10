import * as React from 'react';


export interface RawElastic
{
	id: string;
	color: string;
}

/**
 * Classe représentant un jeu.
 */
class Elastic implements Parsable<Elastic, RawElastic>
{
	id: string;
	color: string;

	constructor()
	{
		this.id = "";
		this.color = "";
	}

	public parse(rawElastic: RawElastic): Elastic
	{
		this.id = rawElastic.id;

		this.color = rawElastic.color;

		return this;
	}

	get isValid(): boolean
	{
		return this.color.trim() != "";
	}
}

export default Elastic;


