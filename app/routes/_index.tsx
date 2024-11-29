import type {MetaFunction} from "@remix-run/node";
import illustrationArticleSvg from "app/images/illustration-article.svg";

import {Suspense, lazy} from "react";

// Lazy load the components
const Footer = lazy(() => import("../components/Footer"));
const AuthorSection = lazy(() => import("../components/AuthorSection"));

export const meta: MetaFunction = () => {
	return [
		{title: "Blog preview Card - FEM"},
		{name: "description", content: "Welcome to Remix!"}
	];
};

export default function Index() {
	return (
		<>
			<header>
				<h1 className="sr-only">Blog Preview Page</h1>
			</header>
			<div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 font-figtree space-y-4">
				<main
					className="flex items-center justify-center"
					aria-labelledby="main-heading"
				>
					<div className="bg-white p-4 rounded-lg border border-black shadow-custom-shadow max-w-lg">
						<div className="flex flex-col items-center">
							<img
								src={illustrationArticleSvg}
								alt="HTML and CSS symbols"
								className="w-full rounded-md"
							/>
							<div className="mt-4">
								<h2
									id="main-heading"
									className="text-black-600 font-semibold text-sm bg-yellow-400 py-1 px-2 rounded-md inline-block"
								>
									Learning
								</h2>
								<p className="text-gray-500 text-xs mt-1 font-semibold">
									Published 21 Dec 2023
								</p>
								<button className="text-lg font-bold mt-2 hover:text-yellow-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500">
									HTML & CSS foundations
								</button>
								<p className="text-gray-600 text-sm mt-1">
									These languages are the backbone of every website, defining
									structure, content, and presentation.
								</p>

								{/* Wrap lazy-loaded component with Suspense */}
								<Suspense fallback={<div>Loading Author...</div>}>
									<AuthorSection />
								</Suspense>
							</div>
						</div>
					</div>
				</main>

				{/* Wrap lazy-loaded component with Suspense */}
				<Suspense fallback={<div>Loading Footer...</div>}>
					<Footer />
				</Suspense>
			</div>
		</>
	);
}
