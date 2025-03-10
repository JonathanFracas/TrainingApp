import "./bootstrap";
import "../css/app.less";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ContextProvider } from "@/Contexts/ContextProvider";
import Menu from "@/Pages/Components/Menu";

import React from "react";


const appName = import.meta.env.VITE_APP_NAME || "Training";

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob("./Pages/**/*.tsx")),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(
			<ContextProvider>
				<Menu />
				<App {...props} />
			</ContextProvider>,
		);
	},
	progress: {
		color: "#4B5563",
	},
});
