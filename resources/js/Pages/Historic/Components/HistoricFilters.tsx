import React, { useEffect, useState } from 'react';
import { SessionsHistoricFilter, SessionType } from "@/Pages/Historic/SessionsHistoric";
import BodyPartType from "@/Models/Musculation/BodyPartType";
import SportType from "@/Models/Sport/SportType";
import HiitType from "@/Models/Hiit/HiitType";
import BodyPartsController from "@/Controllers/Musculation/BodyPartsController";
import SportController from "@/Controllers/Sport/SportController";
import HiitController from "@/Controllers/Hiit/HiitController";

interface HistoricFiltersProperties {
	sessionsHistoricFilter: SessionsHistoricFilter;
	handleFilterChange: (field: string, value: string | number) => void;
}

export function HistoricFilters(props: HistoricFiltersProperties){

	const [bodyParts, setBodyParts] = useState<BodyPartType[]>([]);
	const [sportTypes, setSportTypes] = useState<SportType[]>([]);
	const [hiitTypes, setHiitTypes] = useState<HiitType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const bodyParts = await BodyPartsController.get();
			const sportTypes = await SportController.getSportTypes();
			const hiitTypes = await HiitController.getHiitTypes();

			setBodyParts(bodyParts);
			setSportTypes(sportTypes);
			setHiitTypes(hiitTypes);
		};

		fetchData();
	}, []); // L'effet ne s'exécute qu'une seule fois lors du montage du composant

	const getTypes = () => Object.values(SessionType);

	const getBodyPartTypes = () => {
		const bodyPartTypes: string[] = bodyParts.map(bodyPart => bodyPart.label);
		bodyPartTypes.push("Tout");
		return bodyPartTypes;
	};

	const getSportTypesList = () => {
		const sportTypesList: string[] = sportTypes.map(sportType => sportType.label);
		sportTypesList.push("Tout");
		return sportTypesList;
	};

	const getHiitTypesList = () => {
		const hiitTypesList: string[] = hiitTypes.map(hiitType => hiitType.label);
		hiitTypesList.push("Tout");
		return hiitTypesList;
	};

	const getSelectFilter = (label: string, field: string, value: string | number, values: string[] | number[]): React.ReactNode => (
		<div className="calendar-filter">
			<label>{label}</label>
			<select onChange={(event) => props.handleFilterChange(field, event.currentTarget.value)} value={value}>
				{values.map(type => <option key={type} value={type}>{type}</option>)}
			</select>
		</div>
	);

	return (
		<div className="calendar-filters">
			<h2>Filtres</h2>
			<div className="calendar-filter">
				{getSelectFilter("Type", "type", props.sessionsHistoricFilter.type, getTypes())}

				{props.sessionsHistoricFilter.type === SessionType.Musculation &&
					getSelectFilter("Partie du corps", "bodyPart", props.sessionsHistoricFilter.bodyPart, getBodyPartTypes())
				}

				{props.sessionsHistoricFilter.type === SessionType.Sport &&
					getSelectFilter("Type de sport", "sportType", props.sessionsHistoricFilter.sportType, getSportTypesList())
				}

				{props.sessionsHistoricFilter.type === SessionType.Hiit &&
					getSelectFilter("Type de HIIT", "hiitType", props.sessionsHistoricFilter.hiitType, getHiitTypesList())
				}
			</div>
		</div>
	);
};

export default HistoricFilters;
