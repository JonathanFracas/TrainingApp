import React from 'react';
import SportSession from "@/Models/Sport/SportSession";
import SportType from "@/Models/Sport/SportType";

interface SportFieldsProperties {
	sportSession: SportSession;
	handleSportSessionChange?: (field: string, value: number | string) => void;
	sportTypes?: SportType[];
	disable: boolean;
}

export function SportFields(props: SportFieldsProperties) {
	return (
		<>
			<label>Type</label>
			<select
				onChange={(event) => props.handleSportSessionChange?.("sport_type_id", event.currentTarget.value)}
				value={props.sportSession.sport_type_id}
				disabled={props.disable}
			>
				{!props.disable ? (
					props.sportTypes?.map((type, idx) => (
						<option key={idx} value={type.id}>{type.label}</option>
					))
				) : (
					<option value={props.sportSession.sport_type?.label}>{props.sportSession.sport_type?.label}</option>
				)}
			</select>

			<label>Durée</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleSportSessionChange?.("time", event.currentTarget.valueAsNumber)}
				value={props.sportSession.time}
				disabled={props.disable}
			/>
		</>
	);
};

export default SportFields;
