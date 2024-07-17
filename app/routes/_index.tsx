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
		<div className="flex items-center justify-center min-h-screen bg-yellow-400">
			<div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
				<div className="flex flex-col items-center">
					<img
						src={illustrationArticleSvg}
						alt="Card"
						className="w-full rounded-md"
					/>
					<div className="mt-4 text-center">
						<span className="text-yellow-600 font-semibold text-sm">
							Learning
						</span>
						<p className="text-gray-500 text-xs mt-1">Published 21 Dec 2023</p>
						<h3 className="text-lg font-bold mt-2">HTML & CSS foundations</h3>
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
							<p className="text-gray-700 text-sm ml-2">Greg Hooper</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
