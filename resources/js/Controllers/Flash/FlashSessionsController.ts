import axios from "axios";
import FlashSessionExercise from "@/Models/Flash/FlashSessionExercise";

export default class FlashSessionsController
{
	public static async save(session: FlashSessionExercise[], date: Date): Promise<void>
	{
		const data = JSON.stringify({
			session: session,
			date: date.toISOString()
		});

		const config = {
			headers: {'Content-Type': 'application/json'}
		}

		await axios.post<void>(`/api/flashSession/save/${session}/${date}`, data, config);

	}
}
