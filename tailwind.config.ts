// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#F7F3EF",
        "blush-clay": "#C17A7A",
        eucalyptus: "#6F8B7A",
        "deep-sea": "#0D1B2A",
        "golden-hour": "#D4A017",
        "lavender-dusk": "#8E7CA7",
        "white-rock": "#F7F3EF",
        "grey-goose": "#EEE6DD",
        "pink-daisy": "#C17A7A",
        lotus: "#6F8B7A",
        thunder: "#0D1B2A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.04)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-out forwards",
        "float-soft": "floatSoft 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
