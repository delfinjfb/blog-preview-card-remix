import {Link} from "@remix-run/react";

export default function PrivacyPolicy() {
	return (
		<div className="p-8 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
			<p className="mb-4">
				Your privacy is important to us. This Privacy Policy explains how we
				collect and protect your information when you use our services. This is
				a personal project with no commercial use, and we are committed to
				ensuring your privacy.
			</p>
			<h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
			<p className="mb-4">
				We do not collect personal information such as your name, email address,
				or any contact details.
			</p>
			<p className="mb-4">
				We may collect limited information automatically when you use our site,
				such as IP addresses and browser types, but we do not use cookies.
			</p>
			<Link to="/" className="text-blue-500 hover:underline">
				Back to Main Page
			</Link>
		</div>
	);
}
