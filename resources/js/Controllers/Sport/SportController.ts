import axios from "axios";
import HiitType from "@/Models/Hiit/HiitType";
import SportType, {RawSportType} from "@/Models/Sport/SportType";
import SportSession from "@/Models/Sport/SportSession";


export default class SportController
{
	public static async getSportTypes(): Promise<HiitType[]>
	{
		const sportTypes: SportType[] = [];
		const response = await axios.get<RawSportType[]>(`/api/sport/getSportTypes/`);

		response.data.forEach((sportType) => {
			sportTypes.push((new SportType()).parse(sportType));
		});

		return sportTypes;
	}

	public static async saveSportType(newSportType: SportType): Promise<void>
	{
		await axios.post<void>(`/api/sport/saveSportType/${newSportType}`, newSportType);
	}

	public static async saveSportSession(newSportSession: SportSession): Promise<void>
	{
		await axios.post<void>(`/api/sport/saveSportSession/${newSportSession}`, newSportSession)
	}
}
