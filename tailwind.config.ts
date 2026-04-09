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
        pomodoro: "#8B2323",
        mozzarella: "#F5F0E1",
        olio: "#D4A574",
        forno: "#1A1410",
        texto: "#2B1810",
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
