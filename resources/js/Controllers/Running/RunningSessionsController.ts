import axios from "axios";
import RunningSession from "@/Models/Distance/RunningSession";


export default class RunningSessionsController
{

	public static async save(session: RunningSession): Promise<void>
	{
		await axios.post<void>(`/api/runningSession/save/${session}`, session);
	}
}
