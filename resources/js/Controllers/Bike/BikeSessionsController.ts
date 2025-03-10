import axios from "axios";
import BikeSession from "@/Models/Distance/BikeSession";


export default class BikeSessionsController
{

	public static async save(session: BikeSession): Promise<void>
	{
		await axios.post<void>(`/api/bikeSession/save/${session}`, session);
	}
}
