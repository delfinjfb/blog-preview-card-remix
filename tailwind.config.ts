import type {Config} from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Figtree", "sans-serif"] // Add Figtree as the primary font
			}
		}
	},
	plugins: []
} satisfies Config;
