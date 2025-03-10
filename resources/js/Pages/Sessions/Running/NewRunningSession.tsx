import React, { useState, useEffect } from 'react';
import RunningSession from "@/Models/Distance/RunningSession";
import { Utils } from "@/Utils/Utils";
import RunningSessionsController from "@/Controllers/Running/RunningSessionsController";
import DistanceSessionFields from "@/Pages/Sessions/Running/Components/DistanceSessionFields";

export function NewRunningSession() {
	const [runningSession, setRunningSession] = useState(new RunningSession());

	const handleChange = (field: string, value: number) => {
		const updatedSession = Object.assign(new RunningSession(), runningSession, {[field]: value});

		if (updatedSession.kms > 0 && updatedSession.time > 0) {
			updatedSession.speed = updatedSession.kms / (updatedSession.time / 60);
			updatedSession.pace = updatedSession.time / updatedSession.kms;
		}

		setRunningSession(updatedSession);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const updatedSession = Object.assign(new RunningSession(), runningSession, {date: new Date(event.target.value)});
		setRunningSession(updatedSession);
	};

	const save = async () => {
		await RunningSessionsController.save(runningSession);
	};

	return (
		<div className="new-session">
			<main className="main-new-running-session">
				<div className="running">
					<h1>Running</h1>

					<label>Date</label>
					<input
						type="date"
						onChange={handleDateChange}
						value={Utils.getDateString(runningSession.date)}
					/>

					<DistanceSessionFields
						handleChange={handleChange}
						session={runningSession}
						disabled={false}
					/>

					<div className="save">
						<button className="save-button" onClick={save}>
							<i className="ri-save-line"></i>
							Sauvegarder
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default NewRunningSession;
