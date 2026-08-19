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
        steel: {
          DEFAULT: "#2F6F91",
          soft: "#3C7FA3",
          deep: "#234F68",
        },
        medical: {
          DEFAULT: "#4F89A8",
          soft: "#6D9FBA",
          deep: "#3D6E8A",
        },
        pastel: {
          DEFAULT: "#B9D1DF",
          soft: "#CBDEE9",
          deep: "#9CBBCC",
        },
        mist: {
          DEFAULT: "#E8F0F4",
          soft: "#F1F6F8",
          deep: "#D9E6EC",
        },
        offwhite: {
          DEFAULT: "#F7F6F4",
          soft: "#FBFAF9",
          deep: "#EFEDE9",
        },
        ink: {
          DEFAULT: "#3E4549",
          soft: "#5A6266",
          deep: "#282D30",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica", "Arial", "sans-serif"],
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
