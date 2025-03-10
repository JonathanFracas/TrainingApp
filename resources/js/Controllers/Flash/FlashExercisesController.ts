import axios from "axios";
import FlashExercise, {RawFlashExercise} from "@/Models/Flash/FlashExercise";
import FlashSessionExercisesOrder, {RawFlashSessionExercisesOrder} from "@/Models/Flash/FlashSessionExercisesOrder";


export default class FlashExercisesController
{

	public static async get(): Promise<FlashExercise[]>
	{
		const flashExercises: FlashExercise[] = [];
		const response = await axios.get<RawFlashExercise[]>(`/api/flashExercises/get/`);

		response.data.forEach((flashExercise) => {
			flashExercises.push((new FlashExercise()).parse(flashExercise));
		});

		return flashExercises;
	}

	public static async getExercisesOrder(): Promise<FlashSessionExercisesOrder[]>
	{
		const flashSessionExercisesOrders: FlashSessionExercisesOrder[] = [];

		const response = await axios.get<RawFlashSessionExercisesOrder[]>(`/api/flashExercises/getExercisesOrder/`);

		response.data.forEach((flashExerciseOrder) => {
			flashSessionExercisesOrders.push((new FlashSessionExercisesOrder()).parse(flashExerciseOrder));
		});

		return flashSessionExercisesOrders;
	}
}
