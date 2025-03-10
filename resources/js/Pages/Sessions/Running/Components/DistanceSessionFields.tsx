import React from 'react';
import DistanceSession from "@/Models/Distance/DistanceSession";

interface DistanceSessionFieldsProperties {
	handleChange?: (field: string, value: number) => void;
	session: DistanceSession;
	disabled?: boolean;
}

export function DistanceSessionFields(props: DistanceSessionFieldsProperties) {
	return (
		<>
			<label>Distance (kilomètres)</label>
			<input
				type="number"
				onChange={(event) => props.handleChange?.("kms", event.currentTarget.valueAsNumber)}
				value={props.session.kms}
				disabled={props.disabled}
			/>

			<label>Temps (minutes)</label>
			<input
				type="number"
				onChange={(event) => props.handleChange?.("time", event.currentTarget.valueAsNumber)}
				value={props.session.time}
				disabled={props.disabled}
			/>

			<label>Vitesse (km/h)</label>
			<input
				type="number"
				disabled={true}
				value={props.session.speed}
			/>

			<label>Allure (m/km)</label>
			<input
				type="number"
				disabled={true}
				value={props.session.pace}
			/>
		</>
	);
};

export default DistanceSessionFields;
