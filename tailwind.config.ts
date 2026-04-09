import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pomodoro: "#1E3A5F",
        mozzarella: "#F5F0E1",
        olio: "#D4A574",
        forno: "#0F1A2E",
        texto: "#1A2A40",
        basilico: "#4A6741",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
        dancing: ["var(--font-dancing)"],
      },
    },
  },
  plugins: [],
};
export default config;
