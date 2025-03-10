import BodyPartType from "@/Models/Musculation/BodyPartType";
import axios from "axios";
import MusculationExercise, {RawMusculationExercise} from "@/Models/Musculation/MusculationExercise";
import Elastic, {RawElastic} from "@/Models/Musculation/Elastic";


export default class MusculationExercisesController
{

	public static async get(body_part: string): Promise<MusculationExercise[]>
	{
		const musculationExercises: MusculationExercise[] = [];

		const response = await axios.get<RawMusculationExercise[]>(`/api/musculationExercise/get/${body_part}`);

		response.data.forEach((musculationExercise) => {
			musculationExercises.push((new MusculationExercise()).parse(musculationExercise));
		});

		return musculationExercises;
	}

	public static async save(newExercise: MusculationExercise): Promise<void>
	{
		await axios.post<void>(`/api/musculationExercise/save/${newExercise}`, newExercise);
	}

	public static async saveElastic(elastic: Elastic): Promise<void>
	{
		await axios.post<void>(`/api/musculationExercise/saveElastic/${elastic}`, elastic)
	}

	public static async getElastics(): Promise<Elastic[]>
	{
		const elastics: Elastic[] = [];

		const response = await axios.get<RawElastic[]>(`/api/musculationExercise/getElastics`);

		response.data.forEach((elastic) => {
			elastics.push((new Elastic()).parse(elastic));
		})

		return elastics;
	}
}
