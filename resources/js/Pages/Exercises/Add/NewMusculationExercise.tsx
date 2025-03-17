import React, { useState, useEffect } from 'react';
import ExerciseType from "@/Models/Musculation/ExerciseType";
import BodyPartType from "@/Models/Musculation/BodyPartType";
import BodyPartsController from "@/Controllers/Musculation/BodyPartsController";
import ExerciseTypesController from "@/Controllers/Musculation/ExerciseTypesController";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";
import MusculationExercisesController from "@/Controllers/Musculation/MusculationExercisesController";
import SportController from "@/Controllers/Sport/SportController";
import {Utils} from "@/Utils/Utils";

export function NewMusculationExercise() {
	const [bodyParts, setBodyParts] = useState<BodyPartType[]>([]);
	const [exerciseTypes, setExerciseTypes] = useState<ExerciseType[]>([]);
	const [newExercise, setNewExercise] = useState<MusculationExercise>(new MusculationExercise());

	useEffect(() => {
		const fetchData = async () => {
			const fetchedBodyParts = await BodyPartsController.get();
			const fetchedExerciseTypes = await ExerciseTypesController.get();

			setBodyParts(fetchedBodyParts);
			setExerciseTypes(fetchedExerciseTypes);
		};

		fetchData();
	}, []);

	const handleNewExerciseChange = (field: string, value: string) => {
		setNewExercise(Object.assign(new MusculationExercise(), newExercise, {[field]: value}));
	};

	const save = () => {
		try {
			MusculationExercisesController.save(newExercise);
			Utils.successNotification({message: "Sauvegarde réussie !"});
		}
		catch (error)
		{
			Utils.errorNotification({message: "Erreur lors de la sauvegarde."});
		}
	};

	return (
		<div className="new-exercise">
			<h1>Ajout d'un nouveau exercice de musculation</h1>

			<div className="fields">
				<div className="field">
					<label>Nom</label>
					<input
						type="text"
						value={newExercise.name || ""}
						onChange={(event) => handleNewExerciseChange("name", event.currentTarget.value)}
					/>
				</div>

				<div className="field">
					<label>Partie du corps</label>
					<select
						onChange={(event) => handleNewExerciseChange("body_part_id", event.currentTarget.value)}
						value={newExercise.body_part_id || ""}
					>
						<option value="" hidden></option>
						{bodyParts.map((bodyPart) => (
							<option key={bodyPart.id} value={bodyPart.id}>
								{bodyPart.label}
							</option>
						))}
					</select>
				</div>

				<div className="field">
					<label>Type d'exercice</label>
					<select
						onChange={(event) => handleNewExerciseChange("exercise_type_id", event.currentTarget.value)}
						value={newExercise.exercise_type_id || ""}
					>
						<option value="" hidden></option>
						{exerciseTypes.map((type) => (
							<option key={type.id} value={type.id}>
								{type.label}
							</option>
						))}
					</select>
				</div>

				<div className="save">
					<button
						className="save-button"
						onClick={save}
						disabled={!newExercise.isValid}
					>
						<i className="ri-save-line"></i>
						Sauvegarder
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewMusculationExercise;
