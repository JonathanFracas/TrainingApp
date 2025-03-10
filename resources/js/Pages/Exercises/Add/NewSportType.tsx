import React, { useState } from 'react';
import SportType from "@/Models/Sport/SportType";
import SportController from "@/Controllers/Sport/SportController";

export function NewSportType() {
	const [sportType, setSportType] = useState<SportType>(new SportType());

	const onSportChange = (field: string, value: string) => {
		setSportType(Object.assign(new SportType(), sportType, {[field]: value}));
	};

	const save = () => {
		SportController.saveSportType(sportType);
	};

	return (
		<div className="new-elastic">
			<h1>Ajout d'un sport</h1>

			<div className="fields">
				<div className="field">
					<label>Nom</label>
					<input
						type="text"
						value={sportType.label || ""}
						onChange={(event) => onSportChange("label", event.currentTarget.value)}
					/>
				</div>

				<div className="save">
					<button
						className="save-button"
						onClick={save}
						disabled={!sportType.isValid}
					>
						<i className="ri-save-line"></i>
						Sauvegarder
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewSportType;
