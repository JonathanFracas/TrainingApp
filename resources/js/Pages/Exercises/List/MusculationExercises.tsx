import React, { useState } from 'react';
import SubMenu from "@/Pages/Sessions/Musculation/Components/SubMenu";
import BodyPartType from "@/Models/Musculation/BodyPartType";
import MusculationExercisesController from "@/Controllers/Musculation/MusculationExercisesController";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";

export function MusculationExercises() {
	const [bodyPart, setBodyPart] = useState<BodyPartType | null>(null);
	const [exercises, setExercises] = useState<MusculationExercise[]>([]);

	const onBodyPartChange = async (selectedBodyPart: BodyPartType) => {
		const fetchedExercises = await MusculationExercisesController.get(selectedBodyPart.id);
		setExercises(fetchedExercises);
		setBodyPart(selectedBodyPart);
	};

	return (
		<div className="musculation-exercise-list">
			<SubMenu onClick={onBodyPartChange} />

			<main>
				{bodyPart && (
					<div className="exercises">
						<h1>{bodyPart.label}</h1>

						<table>
							<thead>
							<tr>
								<th >Nom</th>
								<th >Type</th>
							</tr>
							</thead>
							<tbody>
							{exercises.map((exercise, index) => (
								<tr key={index}>
									<td>{exercise.name}</td>
									<td>{exercise.exercise_type.label}</td>
								</tr>
							))}
							</tbody>
						</table>
					</div>
				)}
			</main>
		</div>
	);
};

export default MusculationExercises;
