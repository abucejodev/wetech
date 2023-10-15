import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./core/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        wide: "1536px",
        ultra: "1920px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
