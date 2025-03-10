import React from 'react';
import { Link } from "@inertiajs/react";

const Menu = () => {
	return (
		<nav className="menu">
			<ul>
				<li><Link href={route("home")}><i className="ri-home-7-line" />Home</Link></li>
				<li>
					<div className="group"><i className="ri-pulse-line" />Séance</div>
					<ul>
						<li><Link href={route("new.sessions.musculation")}><i className="ri-weight-line" />Musculation</Link></li>
						<li><Link href={route("new.sessions.running")}><i className="ri-run-line" /> Running</Link></li>
						<li><Link href={route("new.sessions.bike")}><i className="ri-bike-line" /> Vélo</Link></li>
						<li><Link href={route("new.sessions.hiit")}><i className="ri-split-cells-horizontal" /> Fractionné</Link></li>
						<li><Link href={route("new.sessions.flash")}><i className="ri-flashlight-line" /> Flash</Link></li>
						<li><Link href={route("new.sessions.sport")}><i className="ri-football-line" /> Sport</Link></li>
					</ul>
				</li>

				<li>
					<div className="group"><i className="ri-add-line" />Ajouter</div>
					<ul>
						<li><Link href={route("exercise.musculation.new")}><i className="ri-weight-line" />Musculation</Link></li>
						<li><Link href={route("elastic.new")}><i className="ri-sketching" />Elastique</Link></li>
						<li><Link href={route("hiit.type.new")}><i className="ri-split-cells-horizontal" />Fractionné</Link></li>
						<li><Link href={route("sport.type.new")}><i className="ri-football-line" />Sport</Link></li>
					</ul>
				</li>

				<li>
					<div className="group"><i className="ri-file-list-line" />Exercices</div>
					<ul>
						<li><Link href={route("exercises.musculation")}><i className="ri-weight-line" /> Musculation</Link></li>
						<li><Link href={route("exercises.flash")}><i className="ri-flashlight-line" /> Flash</Link></li>
					</ul>
				</li>

				<li>
					<Link href={route("sessions.historic")}><i className="ri-calendar-line" /> Historique</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
