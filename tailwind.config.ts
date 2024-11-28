import type {Config} from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Figtree", "sans-serif"] // Add Figtree as the primary font
			},
			boxShadow: {
				"custom-shadow":
					"0 15px 25px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.15)"
			}
		}
	},
	plugins: []
} satisfies Config;
