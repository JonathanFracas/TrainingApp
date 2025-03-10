import React, { useState, useEffect } from 'react';
import SubMenu from "@/Pages/Sessions/Musculation/Components/SubMenu";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";
import MusculationExercisesController from "@/Controllers/Musculation/MusculationExercisesController";
import MusculationSessionExercise, { EXERCICE_PER_SESSION } from "@/Models/Musculation/MusculationSessionExercise";
import { Utils } from "@/Utils/Utils";
import BodyPartType from "@/Models/Musculation/BodyPartType";
import MusculationSessionsController from "@/Controllers/Musculation/MusculationSessionsController";
import Exercise from "@/Pages/Sessions/Musculation/Components/Exercise";
import Elastic from "@/Models/Musculation/Elastic";

export function NewMusculationSession() {
	const [bodyPart, setBodyPart] = useState<BodyPartType | null>(null);
	const [exercises, setExercises] = useState<MusculationExercise[]>([]);
	const [sessionExercises, setSessionExercises] = useState<MusculationSessionExercise[]>([]);
	const [date, setDate] = useState<Date>(new Date());
	const [elastics, setElastics] = useState<Elastic[]>([]);

	useEffect(() => {
		const queryParameters = new URLSearchParams(window.location.search);
		const sessionNumber = queryParameters.get("sessionNumber");

		if (sessionNumber) {
			MusculationSessionsController.copyBySessionNumber(parseInt(sessionNumber)).then(async (response) => {
				const exercises = await MusculationExercisesController.get(response.body_part.id);
				setSessionExercises(response.exercises);
				setBodyPart(response.body_part);
				setExercises(exercises);
			});
		}

		MusculationExercisesController.getElastics().then((elastics) => {
			setElastics(elastics);
		});
	}, []);

	const onBodyPartChange = async (bodyPart: BodyPartType) => {
		setBodyPart(bodyPart);
		const exercises = await MusculationExercisesController.get(bodyPart.id);
		const newSessionExercises = Array(EXERCICE_PER_SESSION).fill(null).map(() => {
			const sessionExercise = new MusculationSessionExercise();
			sessionExercise.setExercise(exercises[0]);
			return sessionExercise;
		});
		setExercises(exercises);
		setSessionExercises(newSessionExercises);
	};

	const addExercise = () => {
		const newSessionExercises = [...sessionExercises];
		const newSessionExercise = new MusculationSessionExercise();
		newSessionExercise.setExercise(exercises[0]);
		newSessionExercises.push(newSessionExercise);
		setSessionExercises(newSessionExercises);
	};

	const removeExercise = (index: number) => {
		const newSessionExercises = [...sessionExercises];
		if (newSessionExercises.length === 1) {
			setSessionExercises([]);
		} else {
			newSessionExercises.splice(index, 1);
			setSessionExercises(newSessionExercises);
		}
	};

	const handleInputChange = (index: number, key: string, value: string | number | Date) => {
		const newSessionExercises = [...sessionExercises];
		if (key === "musculation_exercise_id") {
			newSessionExercises[index].setExercise(exercises.filter((exercise) => exercise.id == value)[0]);
		} else {
			newSessionExercises[index][key] = value;
		}
		setSessionExercises(newSessionExercises);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(new Date(event.target.value));
	};

	const save = async () => {
		await MusculationSessionsController.save(sessionExercises, bodyPart?.id as string, date);
	};

	const handleLastSessionCopy = () => {
		MusculationSessionsController.copyLastSession(bodyPart?.id as string).then((lastSessionExercises) => {
			setSessionExercises(lastSessionExercises);
		});
	};

	return (
		<div className="new-session">
			<SubMenu onClick={onBodyPartChange} />

			{bodyPart && (
				<main className="main-new-musuclation-session">
					<h1>{bodyPart.label}</h1>

					<div className="buttons-container">
						<button className="copy-button" onClick={handleLastSessionCopy}>
							Copier dernière session
						</button>
					</div>

					<div className="date">
						<label>Date</label>
						<input
							type="date"
							onChange={handleDateChange}
							value={Utils.getDateString(date)}
						/>
					</div>

					<div className="exercises">
						{sessionExercises.map((sessionExercise, index) => (
							<div className="exercise" key={index}>
								<Exercise
									sessionExercise={sessionExercise}
									exercises={exercises}
									index={index}
									exercise_type_id={sessionExercise.musculation_exercise?.exercise_type_id}
									handleInputChange={handleInputChange}
									disable={false}
									elastics={elastics}
								/>
								<button className="remove-exercise" onClick={() => removeExercise(index)}>
									<i className="ri-delete-bin-line"></i>
									Supprimer
								</button>
							</div>
						))}

						{exercises.length > 0 && (
							<div className="exercise">
								<button className="add-exercise" onClick={addExercise}>
									<i className="ri-add-circle-line"></i>
									Ajouter
								</button>
							</div>
						)}
					</div>

					{exercises.length > 0 && (
						<div className="save">
							<button className="save-button" onClick={save}>
								<i className="ri-save-line"></i>
								Sauvegarder
							</button>
						</div>
					)}
				</main>
			)}
		</div>
	);
};

export default NewMusculationSession;
