import React, { useEffect, useState } from 'react';
import Calendar from "react-calendar";
import SessionsHistoricController from "@/Controllers/Historic/SessionsHistoricController";
// @ts-ignore
import { Value } from 'react-calendar/dist/cjs/shared/types';
import MusculationsSession from "@/Models/Musculation/MusculationSession";
import RunningSession from "@/Models/Distance/RunningSession";
import FlashSession from "@/Models/Flash/FlashSession";
import BikeSession from "@/Models/Distance/BikeSession";
import SportSession from "@/Models/Sport/SportSession";
import HiitSession from "@/Models/Hiit/HiitSession";
import HistoricFilters from "@/Pages/Historic/Components/HistoricFilters";
import DaySessions from "@/Pages/Historic/Components/DaySessions";

export enum SessionType {
	All = "Tout",
	Musculation = "Musculation",
	Flash = "Flash",
	Running = "Running",
	Bike = "Velo",
	Sport = "Sport",
	Hiit = "Fractionne",
}

export interface SessionsHistoricFilter {
	type: string;
	bodyPart: string;
	sportType: string;
	hiitType: string;
}

export function SessionsHistoric() {
	const [daysWithSession, setDaysWithSession] = useState<number[]>([]);
	const [currentMonth, setCurrentMonth] = useState<number | null>(null);
	const [date, setDate] = useState<Date>(new Date());
	const [musculationSessions, setMusculationSessions] = useState<MusculationsSession[]>([]);
	const [runningSessions, setRunningSessions] = useState<RunningSession[]>([]);
	const [flashSessions, setFlashSessions] = useState<FlashSession[]>([]);
	const [bikeSessions, setBikeSessions] = useState<BikeSession[]>([]);
	const [sportSessions, setSportSessions] = useState<SportSession[]>([]);
	const [hiitSessions, setHiitSessions] = useState<HiitSession[]>([]);
	const [sessionsHistoricFilter, setSessionsHistoricFilter] = useState<SessionsHistoricFilter>({
		type: "Tout",
		bodyPart: "Tout",
		sportType: "Tout",
		hiitType: "Tout",
	});

	useEffect(() => {
		setDaysWithSessionByMonth(date);
	}, [date, sessionsHistoricFilter]);

	const setDaysWithSessionByMonth = async (date: Date) => {
		setCurrentMonth(date.getMonth());
		const days = await SessionsHistoricController.getSessionsByMonth(date, sessionsHistoricFilter);
		setDaysWithSession(days);
	};

	const onCalendarChange = (date: Value) => {
		const activeDate = date.activeStartDate as Date; // Type assertion
		setDate(activeDate);
	};

	const handleFilterChange = (field: string, value: string | number) => {
		setSessionsHistoricFilter((prevFilters) => ({
			...prevFilters,
			[field]: value,
		}));
	};

	const handleClickDay = async (date: Value) => {
		const response = await SessionsHistoricController.getSessionsByDay(date);
		setMusculationSessions(response.musculationSessions);
		setRunningSessions(response.runningSessions);
		setFlashSessions(response.flashSessions);
		setHiitSessions(response.hiitSessions);
		setSportSessions(response.sportSessions);
		setBikeSessions(response.bikeSessions);
	};

	const areSessions = () => {
		return runningSessions.length > 0 || musculationSessions.length > 0 || flashSessions.length > 0 ||
			hiitSessions.length > 0 || sportSessions.length > 0 || bikeSessions.length > 0;
	};

	return (
		<div className="calendar-page">
			<div className="calendar-first-step">
				<div className="calendar-configuration">
					<HistoricFilters
						sessionsHistoricFilter={sessionsHistoricFilter}
						handleFilterChange={handleFilterChange}
					/>
				</div>

				<div className="calendar">
					<Calendar
						tileClassName={({ date }) => {
							if (daysWithSession.includes(date.getDate()) && date.getMonth() === currentMonth) {
								return 'highlight';
							}
						}}
						tileDisabled={({ date }) => !daysWithSession.includes(date.getDate()) || date.getMonth() !== currentMonth}
						minDetail="month"
						onActiveStartDateChange={onCalendarChange}
						onClickDay={handleClickDay}
					/>
				</div>
			</div>

			{areSessions() && (
				<DaySessions
					musculationSessions={musculationSessions}
					runningSessions={runningSessions}
					flashSessions={flashSessions}
					bikeSessions={bikeSessions}
					sportSessions={sportSessions}
					hiitSessions={hiitSessions}
				/>
			)}
		</div>
	);
};

export default SessionsHistoric;
