import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
				plex: ["IBM Plex", defaultTheme.fontFamily.mono],
      },
      colors: {
        "text": "#cae691",
        "light-green": "#599c70",
        "green": "#376c4f",
        "dark-green": "#113f39",
        "bg": "#0d2228",
      }
    },
  },
  plugins: [],
};
export default config;
