import React from 'react';
import FlashExercise from "@/Models/Flash/FlashExercise";
import FlashSessionExercise from "@/Models/Flash/FlashSessionExercise";

interface FlashProperties {
	exercise: FlashSessionExercise;
	index: number;
	handleFlashExerciseChange?: (field: string, index: number, value: number | string) => void;
	flashExercises?: FlashExercise[];
	disable: boolean;
}

export function Flash(props: FlashProperties) {
	return (
		<>
			<label>Exercise {props.index + 1}</label>
			<select
				onChange={(event) => props.handleFlashExerciseChange?.("exercise_name", props.index, event.currentTarget.value)}
				value={props.exercise.exercise_name}
				disabled={props.disable}
			>
				{!props.disable ? (
					props.flashExercises?.map((exercise, idx) => (
						<option key={idx} value={exercise.name}>{exercise.name}</option>
					))
				) : (
					<option value={props.exercise.exercise_name}>{props.exercise.exercise_name}</option>
				)}
			</select>
			<label>Répétitions</label>
			<input
				type="number"
				min={0}
				onChange={(event) => props.handleFlashExerciseChange?.("repeat", props.index, event.currentTarget.valueAsNumber)}
				value={props.exercise.repeat}
				disabled={props.disable}
			/>
		</>
	);
};

export default Flash;
