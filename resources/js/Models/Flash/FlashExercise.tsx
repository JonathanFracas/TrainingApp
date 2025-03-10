
export interface RawFlashExercise
{
	name: string;
}

/**
 * Classe représentant un jeu.
 */
class FlashExercise implements Parsable<FlashExercise, RawFlashExercise>
{
	name: string;

	constructor()
	{
		this.name = "";
	}

	public parse(rawFlashExercise: RawFlashExercise): FlashExercise
	{
		this.name = rawFlashExercise.name;
		return this;
	}

}

export const ABDO_BOXEUR = "Abdo boxeur";
export const ABDO_RAMEUR = "Abdo rameur";
export const CRUNCH = "Crunch";
export const FENTE = "Fente";
export const FLEXION_EXTENSION = "Flexion extension";
export const MIXE = "Mixe";
export const POMPE = "Pompe";

export default FlashExercise;


