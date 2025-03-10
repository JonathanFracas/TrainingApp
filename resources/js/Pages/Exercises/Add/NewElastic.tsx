import React, { useState } from 'react';
import Elastic from "@/Models/Musculation/Elastic";
import MusculationExercisesController from "@/Controllers/Musculation/MusculationExercisesController";
import exp from "constants";

export function NewElastic() {
	const [elastic, setElastic] = useState(new Elastic());

	// Fonction pour gérer les changements dans les champs d'input
	const onElasticChange = (field: string, value: string) => {
		setElastic(Object.assign(new Elastic(), elastic, {[field]: value}));
	};

	const save = () => {
		MusculationExercisesController.saveElastic(elastic);
	};

	return (
		<div className="new-elastic">
			<h1>Ajout d'un élastique</h1>
			<div className="fields">
				<div className="field">
					<label>Couleur</label>
					<input
						type="text"
						value={elastic.color || ""}
						onChange={(event) => onElasticChange("color", event.currentTarget.value)}
					/>
				</div>
				<div className="save">
					<button
						className="save-button"
						onClick={save}
						disabled={!elastic.isValid}
					>
						<i className="ri-save-line"></i>
						Sauvegarder
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewElastic;
