import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "2.75rem",
        "6xl": "3rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)"],
        inter: ["var(--font-inter)"],
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
      animation: {
        shimmer: "shimmer 1s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "45% 50%" },
          "50%": { backgroundPosition: "55% 50%" },
          "100%": { backgroundPosition: "45% 50%" },
        },
      },
      scale: {
        101: "1.01",
        102: "1.02",
        103: "1.03",
        104: "1.04",
      },
    },
  },
  safelist: [
    {
      pattern: /from-(pink|purple|blue|yellow|green|red|gray|slate)-[0-9]{3}/,
    },
    {
      pattern: /to-(pink|purple|blue|yellow|green|red|gray|slate)-[0-9]{3}/,
    },
  ],
  plugins: [],
};

export default config;
