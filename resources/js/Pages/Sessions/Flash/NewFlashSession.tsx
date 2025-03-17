import React, { useEffect, useState } from 'react';
import FlashExercisesController from "@/Controllers/Flash/FlashExercisesController";
import FlashExercise from "@/Models/Flash/FlashExercise";
import FlashSessionsController from "@/Controllers/Flash/FlashSessionsController";
import FlashSessionExercisesOrder from "@/Models/Flash/FlashSessionExercisesOrder";
import FlashSessionExercise from "@/Models/Flash/FlashSessionExercise";
import { Utils } from "@/Utils/Utils";
import Flash from "@/Pages/Sessions/Flash/Components/Flash";
import HiitController from "@/Controllers/Hiit/HiitController";

export function NewFlashSession() {
	const [flashExercisesOrder, setFlashExercisesOrder] = useState<FlashSessionExercisesOrder[]>([]);
	const [flashExercises, setFlashExercises] = useState<FlashExercise[]>([]);
	const [flashSessionExercises, setFlashSessionExercises] = useState<FlashSessionExercise[]>([]);
	const [date, setDate] = useState<Date>(new Date());

	useEffect(() => {
		const fetchData = async () => {
			const flashExercise = await FlashExercisesController.get();
			const exercisesOrder = await FlashExercisesController.getExercisesOrder();

			const sessionExercises: FlashSessionExercise[] = exercisesOrder.map((exercise) => {
				const flashSessionExercise = new FlashSessionExercise();
				flashSessionExercise.exercise_name = exercise.exercise_name;
				return flashSessionExercise;
			});

			setFlashExercises(flashExercise);
			setFlashExercisesOrder(exercisesOrder);
			setFlashSessionExercises(sessionExercises);
		};

		fetchData();
	}, []);

	const handleFlashExerciseChange = (field: string, index: number, value: number | string): void => {
		const updatedExercises = [...flashSessionExercises];
		updatedExercises[index][field] = value;
		setFlashSessionExercises(updatedExercises);
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setDate(new Date(event.target.value));
	};

	const save = async (): Promise<void> => {
		try {
			await FlashSessionsController.save(flashSessionExercises, date);
			Utils.successNotification({message: "Sauvegarde réussie !"});
		}
		catch (error)
		{
			Utils.errorNotification({message: "Erreur lors de la sauvegarde."});
		}
	};

	return (
		<div className={"new-session"}>
			<main className={"main-new-flash-session"}>
				<div className={"flash"}>
					<h1>Flash</h1>

					<label>Date</label>
					<input
						type={"date"}
						onChange={handleDateChange}
						value={Utils.getDateString(date)}
					/>

					{flashSessionExercises.map((exercise, index) => (
						<div className={"flash-exercise"} key={index}>
							<Flash
								exercise={exercise}
								index={index}
								flashExercises={flashExercises}
								handleFlashExerciseChange={handleFlashExerciseChange}
								disable={false}
							/>
						</div>
					))}

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

export default NewFlashSession;
