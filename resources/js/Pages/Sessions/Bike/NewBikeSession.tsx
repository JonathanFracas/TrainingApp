import React, { useState } from 'react';
import RunningSession from "@/Models/Distance/RunningSession";
import { Utils } from "@/Utils/Utils";
import DistanceSessionFields from "@/Pages/Sessions/Running/Components/DistanceSessionFields";
import BikeSession from "@/Models/Distance/BikeSession";
import BikeSessionsController from "@/Controllers/Bike/BikeSessionsController";

export function NewBikeSession() {
	const [bikeSession, setBikeSession] = useState<BikeSession>(new RunningSession());
	const [speed, setSpeed] = useState<number>(0);
	const [pace, setPace] = useState<number>(0);

	const handleChange = (field: string, value: number) => {
		const updatedBikeSession = Object.assign(new BikeSession(), bikeSession, {[field]: value});

		// Calculer la vitesse et le rythme
		if (updatedBikeSession.kms > 0 && updatedBikeSession.time > 0) {
			updatedBikeSession.speed = updatedBikeSession.kms / (updatedBikeSession.time / 60);
			updatedBikeSession.pace = updatedBikeSession.time / updatedBikeSession.kms;
		}

		setBikeSession(updatedBikeSession);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const updatedBikeSession = Object.assign(new BikeSession(), bikeSession, {date: new Date(event.target.value)});
		setBikeSession(updatedBikeSession);
	};

	const save = async (): Promise<void> => {
		await BikeSessionsController.save(bikeSession);
	};

	return (
		<div className={"new-session"}>
			<main className={"main-new-running-session"}>
				<div className={"running"}>
					<h1>Vélo</h1>

					<label>Date</label>
					<input
						type={"date"}
						onChange={handleDateChange}
						value={Utils.getDateString(bikeSession.date)}
					/>

					<DistanceSessionFields
						handleChange={handleChange}
						session={bikeSession}
						disabled={false}
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

export default NewBikeSession;
