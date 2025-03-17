import React, { useState, useEffect } from 'react';
import { Utils } from "@/Utils/Utils";
import HiitSession from "@/Models/Hiit/HiitSession";
import HiitType from "@/Models/Hiit/HiitType";
import HiitController from "@/Controllers/Hiit/HiitController";
import HiitFields from "@/Pages/Sessions/Hiit/Components/HiitFields";
import MusculationSessionsController from "@/Controllers/Musculation/MusculationSessionsController";

export function NewHiitSession() {
	const [hiitTypes, setHiitTypes] = useState<HiitType[]>([]);
	const [hiitSession, setHiitSession] = useState<HiitSession>(new HiitSession());

	useEffect(() => {
		const fetchHiitTypes = async () => {
			const types = await HiitController.getHiitTypes();
			const newHiitSession = Object.assign(new HiitSession());
			newHiitSession.setType(types[0]); // set default type
			setHiitTypes(types);
			setHiitSession(newHiitSession);
		};

		fetchHiitTypes();
	}, []);

	const handleHiitChange = (field: string, value: Date | number | string): void => {
		const updatedHiitSession = Object.assign(new HiitSession(), hiitSession); // Create a new instance
		if (field === "hiit_type_id") {
			updatedHiitSession.setType(hiitTypes.filter((type) => type.id == value)[0]);
		}
		updatedHiitSession[field] = value;
		setHiitSession(updatedHiitSession);
	};

	const save = async (): Promise<void> => {
		try {
			await HiitController.saveHiitSession(hiitSession);
			Utils.successNotification({message: "Sauvegarde réussie !"});
		}
		catch (error)
		{
			Utils.errorNotification({message: "Erreur lors de la sauvegarde."});
		}
	};

	return (
		<div className={"new-session"}>
			<main className={"main-new-hiit-session"}>
				<div className={"hiit"}>
					<h1>Fractionné</h1>

					<label>Date</label>
					<input
						type={"date"}
						onChange={(event) => handleHiitChange("date", new Date(event.currentTarget.value))}
						value={Utils.getDateString(hiitSession.date)}
					/>

					<HiitFields
						exercise={hiitSession}
						hiitTypes={hiitTypes}
						handleHiitChange={handleHiitChange}
						disable={false}
					/>

					<div className={"save"}>
						<button className={"save-button"} onClick={save}>
							<i className="ri-save-line"></i>
							Sauvegarder
						</button>
					</div>

				</div>
			</main>
		</div>
	);
}

export default NewHiitSession;
