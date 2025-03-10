import React from 'react';
import Exercise from "@/Pages/Sessions/Musculation/Components/Exercise";
import { Link } from "@inertiajs/react";
import DistanceSessionFields from "@/Pages/Sessions/Running/Components/DistanceSessionFields";
import SportFields from "@/Pages/Sessions/Sport/Components/SportFields";
import HiitFields from "@/Pages/Sessions/Hiit/Components/HiitFields";
import Flash from "@/Pages/Sessions/Flash/Components/Flash";
import MusculationsSession from "@/Models/Musculation/MusculationSession";
import RunningSession from "@/Models/Distance/RunningSession";
import FlashSession from "@/Models/Flash/FlashSession";
import BikeSession from "@/Models/Distance/BikeSession";
import SportSession from "@/Models/Sport/SportSession";
import HiitSession from "@/Models/Hiit/HiitSession";
import DistanceSession from "@/Models/Distance/DistanceSession";

interface DaySessionsProperties {
	musculationSessions: MusculationsSession[];
	runningSessions: RunningSession[];
	flashSessions: FlashSession[];
	bikeSessions: BikeSession[];
	sportSessions: SportSession[];
	hiitSessions: HiitSession[];
}

export function DaySessions(props: DaySessionsProperties){

	const getDistanceSession = (distanceSessions: DistanceSession[]) => (
		<div className="simple-sessions">
			<h1>Running</h1>
			{distanceSessions.map((distanceSession, index) => (
				<div className="simple-session" key={index}>
					<DistanceSessionFields session={distanceSession} disabled={true} />
				</div>
			))}
		</div>
	);

	return (
		<div className="sessions">
			{props.musculationSessions.length > 0 && (
				<div className="musculation-sessions">
					<h1>Musculation</h1>
					{props.musculationSessions.map((musculationSession, index) => (
						<div className="musculation-session" key={index}>
							<h2>{musculationSession.body_part?.label}</h2>
							<div className="musuculation-session-exercises">
								{musculationSession.exercises?.map((exercise, index) => (
									<div className="musuculation-session-exercise" key={index}>
										<Exercise
											sessionExercise={exercise}
											index={index}
											exercise_type_id={exercise.musculation_exercise?.exercise_type_id}
											disable={true}
										/>
									</div>
								))}
							</div>
							<button className="copy-button">
								<Link href={route('new.sessions.musculation', {
									sessionNumber: musculationSession.session_number,
								})}>
									Copier la séance
								</Link>
							</button>
						</div>
					))}
				</div>
			)}

			<br />

			{props.runningSessions.length > 0 && getDistanceSession(props.runningSessions)}

			<br />

			{props.bikeSessions.length > 0 && getDistanceSession(props.bikeSessions)}

			<br />

			{props.sportSessions.length > 0 && (
				<div className="simple-sessions">
					<h1>Sport</h1>
					{props.sportSessions.map((sportSession, index) => (
						<div className="simple-session" key={index}>
							<SportFields sportSession={sportSession} disable={true} />
						</div>
					))}
				</div>
			)}

			<br />

			{props.hiitSessions.length > 0 && (
				<div className="simple-sessions">
					<h1>Fractionné</h1>
					{props.hiitSessions.map((hiitSession, index) => (
						<div className="simple-session" key={index}>
							<HiitFields exercise={hiitSession} disable={true} />
						</div>
					))}
				</div>
			)}

			<br />

			{props.flashSessions.length > 0 && (
				<div className="simple-sessions">
					<h1>Flash</h1>
					{props.flashSessions.map((flashSession, index) => (
						<div className="simple-session" key={index}>
							{flashSession.exercises?.map((exercise, index) => (
								<Flash key={index} exercise={exercise} index={index} disable={true} />
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DaySessions;
