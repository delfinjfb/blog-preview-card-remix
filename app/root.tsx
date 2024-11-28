import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "@remix-run/react";
import "app/styles/tailwind.css";
import Matomo from "./components/Matomo"; // Import Matomo component

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-yellow-400">
				<Outlet />
				<Matomo /> {/* Add Matomo component here */}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
