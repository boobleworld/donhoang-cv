import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F6F2EA",
          soft: "#FBF9F5",
          deep: "#EEE7D9",
        },
        charcoal: {
          DEFAULT: "#15161A",
          soft: "#1F2124",
          muted: "#2B2D31",
        },
        andaman: {
          DEFAULT: "#3E8F8A",
          soft: "#6FAFAA",
          deep: "#2C6863",
        },
        sand: {
          DEFAULT: "#C7B79C",
          soft: "#DCD0BA",
          deep: "#A9976F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        editorial: "1600px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
