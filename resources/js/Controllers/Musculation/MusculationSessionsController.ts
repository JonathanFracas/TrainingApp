import BodyPartType from "@/Models/Musculation/BodyPartType";
import axios from "axios";
import MusculationSessionExercise, {RawMusculationSessionExercise} from "@/Models/Musculation/MusculationSessionExercise";
import dayjs from "dayjs";


export default class MusculationSessionsController
{

	public static async save(session: MusculationSessionExercise[], body_part_id: string, date: Date): Promise<void>
	{
		const data = JSON.stringify({
			session: session,
			body_part_id: body_part_id,
			date: dayjs(date).format("YYYY-MM-DD"),
		});

		const config = {
			headers: {'Content-Type': 'application/json'}
		}

		await axios.post<void>(`/api/musculationSession/save/${session}/${body_part_id}/${date}`, data, config);
	}

	public static async copyLastSession(body_part_id: string): Promise<MusculationSessionExercise[]>
	{
		const musculationSessionExercises: MusculationSessionExercise[] = [];

		const response = await axios.get<RawMusculationSessionExercise[]>(`/api/musculationSession/copyLastSession/${body_part_id}`);

		response.data.forEach((musculationSessionExercise) => {
			const sessionExercise = (new MusculationSessionExercise()).parse(musculationSessionExercise);
			sessionExercise.date = new Date();
			musculationSessionExercises.push(sessionExercise);
		});

		return musculationSessionExercises;
	}

	public static async copyBySessionNumber(sessionNumber: number): Promise<{exercises: MusculationSessionExercise[], body_part: BodyPartType}>
	{
		const musculationSessionExercises: MusculationSessionExercise[] = [];
		const response = await axios.get(`/api/musculationSession/copyBySessionNumber/${sessionNumber}`);

		response.data.exercises.forEach((musculationSessionExercise: RawMusculationSessionExercise) => {
			const sessionExercise = (new MusculationSessionExercise()).parse(musculationSessionExercise);
			sessionExercise.date = new Date();
			musculationSessionExercises.push(sessionExercise);
		});

		const bodyPart = (new BodyPartType()).parse(response.data.body_part);

		return {
			exercises: musculationSessionExercises,
			body_part: bodyPart
		};
	}
}
