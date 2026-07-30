import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        surface: "#F7F7F5",
        ink: "#111111",
        graphite: "#333333",
        line: "#E8E8E8",
        accent: "#526046",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(17, 17, 17, 0.06)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "\"Iowan Old Style\"",
          "\"Palatino Linotype\"",
          "\"Book Antiqua\"",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "\"Helvetica Neue\"",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        proposal: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
