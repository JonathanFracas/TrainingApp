import React from 'react';
import HiitSession from "@/Models/Hiit/HiitSession";
import HiitType from "@/Models/Hiit/HiitType";

interface HiitFieldsProperties {
	exercise: HiitSession;
	handleHiitChange?: (field: string, value: number | string) => void;
	hiitTypes?: HiitType[];
	disable: boolean;
}

export function HiitFields(props: HiitFieldsProperties) {
	return (
		<>
			<label>Type</label>
			<select
				onChange={(event) => props.handleHiitChange?.("hiit_type_id", event.currentTarget.value)}
				value={props.exercise.hiit_type_id}
				disabled={props.disable}
			>
				{!props.disable ?
					props.hiitTypes?.map((type, idx) => (
						<option key={idx} value={type.id}>{type.label}</option>
					)) :
					<option value={props.exercise.hiit_type?.label}>{props.exercise.hiit_type?.label}</option>
				}
			</select>

			<label>Répétitions</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleHiitChange?.("repeat", event.currentTarget.valueAsNumber)}
				value={props.exercise.repeats}
				disabled={props.disable}
			/>

			<label>Minuteur (secondes)</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleHiitChange?.("timer", event.currentTarget.valueAsNumber)}
				value={props.exercise.timer}
				disabled={props.disable}
			/>

			<label>Haute intensité</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleHiitChange?.("high_intensity", event.currentTarget.valueAsNumber)}
				value={props.exercise.high_intensity}
				disabled={props.disable}
			/>

			<label>Récupération</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleHiitChange?.("recovery", event.currentTarget.valueAsNumber)}
				value={props.exercise.recovery}
				disabled={props.disable}
			/>
		</>
	);
}

export default HiitFields;
