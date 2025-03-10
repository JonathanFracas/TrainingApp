import axios from "axios";
import {SessionsHistoricFilter} from "@/Pages/Historic/SessionsHistoric";
import dayjs from "dayjs";
import MusculationSession from "@/Models/Musculation/MusculationSession";
import RunningSession from "@/Models/Distance/RunningSession";
import FlashSession from "@/Models/Flash/FlashSession";
import BikeSession from "@/Models/Distance/BikeSession";
import HiitSession from "@/Models/Hiit/HiitSession";
import SportSession from "@/Models/Sport/SportSession";


export default class SessionsHistoricController
{

	public static async getSessionsByMonth(date: Date, filters: SessionsHistoricFilter): Promise<number[]>
	{
		const params = {
			date: dayjs(date).format("YYYY-MM-DD"),
			filters: filters
		};

		const response = await axios.get(`/api/historic/getSessionsByMonth`, { params });

		return response.data;
	}

	private static parseSessions<T extends Parsable<T, R>, R>(data: R[], sessionClass: { new(): T}): T[]
	{
		return data.map(item => (new sessionClass()).parse(item));
	}

	public static async getSessionsByDay(date: Date):
		Promise<{
			musculationSessions: MusculationSession[], runningSessions: RunningSession[], flashSessions: FlashSession[],
			hiitSessions: HiitSession[], sportSessions: SportSession[], bikeSessions: BikeSession[]
		}>
	{
		const params = {
			date: dayjs(date).format("YYYY-MM-DD"),
		};

		const response = await axios.get(`/api/historic/getSessionsByDay`, {params});

		return {
			musculationSessions: this.parseSessions(response.data.musculations, MusculationSession),
			runningSessions: this.parseSessions(response.data.runnings, RunningSession),
			flashSessions: this.parseSessions(response.data.flashs, FlashSession),
			hiitSessions: this.parseSessions(response.data.hiits, HiitSession),
			sportSessions: this.parseSessions(response.data.sports, SportSession),
			bikeSessions: this.parseSessions(response.data.bikes, BikeSession),
		}
	}

}
