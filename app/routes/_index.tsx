import type {MetaFunction} from "@remix-run/node";
import illustrationArticleSvg from "app/images/illustration-article.svg";
import imageAvatar from "app/images/image-avatar.webp";

export const meta: MetaFunction = () => {
	return [
		{title: "Blog preview Card - FEM"},
		{name: "description", content: "Welcome to Remix!"}
	];
};
export default function Index() {
	return (
		<>
			<header></header>
			<main>
				<div className="flex items-center justify-center min-h-screen bg-yellow-400 ">
					<div className="bg-white p-4 rounded-lg border border-black shadow-custom-shadow max-w-xs">
						<div className="flex flex-col items-center">
							<img
								src={illustrationArticleSvg}
								alt="Card"
								className="w-full rounded-md"
							/>
							<div className="mt-4 ">
								<h3 className="text-black-600 font-semibold text-sm bg-yellow-400 py-1 px-2 rounded-md inline-block">
									Learning
								</h3>
								<p className="text-gray-500 text-xs mt-1 font-semibold">
									Published 21 Dec 2023
								</p>
								<h1 className="text-lg font-bold mt-2 hover:text-yellow-500 cursor-pointer">
									HTML & CSS foundations
								</h1>
								<p className="text-gray-600 text-sm mt-1">
									These languages are the backbone of every website, defining
									structure, content, and presentation.
								</p>
								<div className="flex items-center mt-4">
									<img
										src={imageAvatar}
										alt="Author"
										className="w-8 h-8 rounded-full"
									/>
									<p className="text-gray-700 font-bold text-xs ml-2">
										Greg Hooper
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer></footer>
		</>
	);
}
