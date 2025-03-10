import React from 'react';
import { ExercisesTypes } from "@/Models/Musculation/ExerciseType";
import MusculationSessionExercise from "@/Models/Musculation/MusculationSessionExercise";
import MusculationExercise from "@/Models/Musculation/MusculationExercise";
import Elastic from "@/Models/Musculation/Elastic";

interface ExerciseProperties {
	sessionExercise: MusculationSessionExercise;
	exercises?: MusculationExercise[];
	index: number;
	exercise_type_id?: string;

	handleInputChange?: (index: number, key: string, value: string | number | Date) => void;
	disable: boolean;
	elastics?: Elastic[];
}

export function Exercise(props: ExerciseProperties){
	return (
		<>
			<label>Exercice {props.index + 1}</label>
			<select
				onChange={(event) => props.handleInputChange?.(props.index, "musculation_exercise_id", event.currentTarget.value)}
				value={props.sessionExercise.musculation_exercise?.id}
				disabled={props.disable}
			>
				{!props.disable ? (
					props.exercises?.map(exercise => (
						<option key={exercise.id} value={exercise.id}>
							{exercise.name}
						</option>
					))
				) : (
					<option value={props.sessionExercise.musculation_exercise?.id}>
						{props.sessionExercise.musculation_exercise?.name}
					</option>
				)}
			</select>

			<label>Series</label>
			<input
				type="number"
				onChange={(event) => props.handleInputChange?.(props.index, "series", event.currentTarget.valueAsNumber)}
				value={props.sessionExercise.series}
				disabled={props.disable}
			/>

			{props.exercise_type_id !== ExercisesTypes.CORE_STRENGTHENING && (
				<>
					<label>Répétitions</label>
					<input
						type="number"
						onChange={(event) => props.handleInputChange?.(props.index, "repeats", event.currentTarget.valueAsNumber)}
						value={props.sessionExercise.repeats}
						disabled={props.disable}
					/>
				</>
			)}

			{props.exercise_type_id === ExercisesTypes.WEIGHT && (
				<>
					<label>Poids</label>
					<input
						type="number"
						onChange={(event) => props.handleInputChange?.(props.index, "weight", event.currentTarget.valueAsNumber)}
						value={props.sessionExercise.weight}
						disabled={props.disable}
					/>
				</>
			)}

			{props.exercise_type_id === ExercisesTypes.ELASTIC && (
				<>
					<label>Elastique</label>
					<select
						onChange={(event) => props.handleInputChange?.(props.index, "elastic", event.currentTarget.value)}
						value={props.sessionExercise.elastic}
						disabled={props.disable}
					>
						{!props.disable ? (
							props.elastics?.map(elastic => (
								<option key={elastic.id} value={elastic.color}>
									{elastic.color}
								</option>
							))
						) : (
							<option value={props.sessionExercise.elastic}>{props.sessionExercise.elastic}</option>
						)}
					</select>
				</>
			)}

			{props.exercise_type_id === ExercisesTypes.CORE_STRENGTHENING && (
				<>
					<label>Gainage</label>
					<input
						type="number"
						onChange={(event) => props.handleInputChange?.(props.index, "core_strengthening", event.currentTarget.valueAsNumber)}
						value={props.sessionExercise.core_strengthening}
						disabled={props.disable}
					/>
				</>
			)}
		</>
	);
};

export default Exercise;
