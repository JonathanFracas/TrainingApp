import BodyPartType, {RawBodyPartType} from "@/Models/Musculation/BodyPartType";
import axios from "axios";


export default class BodyPartsController
{

	public static async get(): Promise<BodyPartType[]>
	{
		const bodyParts: BodyPartType[] = [];

		const response = await axios.get<RawBodyPartType[]>(`/api/bodyPart/get/`);

		response.data.forEach((bodyPart) => {
			bodyParts.push((new BodyPartType()).parse(bodyPart));
		});

		return bodyParts;
	}
}
