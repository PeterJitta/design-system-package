/** @type {import('tailwindcss').Config} */
import baseColor from "./src/style/color"

export default {
  content: [
		    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				...baseColor
			}
		},
  },
  plugins: [],
}

