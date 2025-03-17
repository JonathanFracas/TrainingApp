import React, { useState } from 'react';
import HiitType from "@/Models/Hiit/HiitType";
import HiitController from "@/Controllers/Hiit/HiitController";
import MusculationExercisesController from "@/Controllers/Musculation/MusculationExercisesController";
import {Utils} from "@/Utils/Utils";

export function NewHiitType() {
	const [hiitType, setHiitType] = useState(new HiitType());

	const onHiitChange = (field: string, value: string) => {
		setHiitType(Object.assign(new HiitType(), hiitType, {[field]: value}));
	};

	const save = () => {
		try {
			HiitController.saveHiitType(hiitType);
			Utils.successNotification({message: "Sauvegarde réussie !"});
		}
		catch (error)
		{
			Utils.errorNotification({message: "Erreur lors de la sauvegarde."});
		}
	};

	return (
		<div className="new-hiit-type">
			<h1>Ajout d'un type d'entraînement fractionné</h1>

			<div className="fields">
				<div className="field">
					<label>Nom</label>
					<input
						type="text"
						value={hiitType.label || ""}
						onChange={(event) => onHiitChange("label", event.currentTarget.value)}
					/>
				</div>

				<div className="save">
					<button
						className="save-button"
						onClick={save}
						disabled={!hiitType.isValid}
					>
						<i className="ri-save-line"></i>
						Sauvegarder
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewHiitType;
