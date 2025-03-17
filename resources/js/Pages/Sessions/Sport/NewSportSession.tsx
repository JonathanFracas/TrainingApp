import React, { useState, useEffect } from 'react';
import { Utils } from "@/Utils/Utils";
import SportSession from "@/Models/Sport/SportSession";
import SportType from "@/Models/Sport/SportType";
import SportController from "@/Controllers/Sport/SportController";
import SportFields from "@/Pages/Sessions/Sport/Components/SportFields";

export function NewSportSession() {
	const [sportTypes, setSportTypes] = useState<SportType[]>([]);
	const [sportSession, setSportSession] = useState<SportSession>(new SportSession());

	useEffect(() => {
		const fetchSportTypes = async () => {
			const fetchedSportTypes = await SportController.getSportTypes();
			const initialSession = Object.assign(new SportSession(), { sport_type_id: fetchedSportTypes[0].id });

			setSportTypes(fetchedSportTypes);
			setSportSession(initialSession);
		};

		fetchSportTypes();
	}, []);

	const handleSportSessionChange = (field: string, value: Date | number | string) => {
		const updatedSession = Object.assign(new SportSession(), sportSession);

		if (field === "sport_type_id") {
			updatedSession.setType(sportTypes.find(type => type.id === value) as SportType);
		}

		updatedSession[field] = value;
		setSportSession(updatedSession);
	};

	const save = async () => {
		await SportController.saveSportSession(sportSession);
	};

	return (
		<div className={"new-session"}>
			<main className={"main-new-sport-session"}>
				<div className={"sport"}>
					<h1>Sport</h1>

					<label>Date</label>
					<input
						type={"date"}
						onChange={(event) => handleSportSessionChange("date", new Date(event.currentTarget.value))}
						value={Utils.getDateString(sportSession.date)}
					/>

					<SportFields
						sportSession={sportSession}
						sportTypes={sportTypes}
						handleSportSessionChange={handleSportSessionChange}
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
};

export default NewSportSession;
