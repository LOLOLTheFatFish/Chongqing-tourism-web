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
        cyber: {
          bg: "#050505", // Deep dark background
          neon: "#ff00ff", // Neon Pink
          cyan: "#00ffff", // Cyan
          glass: "rgba(255, 255, 255, 0.05)",
          glassBorder: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        mono: ['monospace'], // Use default or specific mono
      },
    },
  },
  plugins: [],
};
export default config;
