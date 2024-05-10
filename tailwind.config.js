/** @type {import('tailwindcss').Config} */

import { filterTokensByType } from "./fns";
import tokens from "./dist/build/tailwind/global.json"

const colors = filterTokensByType('color', tokens)

export default {
  content: [
		    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				...colors
			}
		},
  },
  plugins: [],
}

