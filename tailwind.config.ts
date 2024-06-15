import type { Config } from "tailwindcss";

const config: Config = {
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
        theme: "#633c02",
        themeLight: "#c7a17a",
        headerItem: "#00864a",
        navTxt: "#000",
        navTxtHover: "#fd9900",
        blue: "#3F7DF6",
        green: "#00864a",
        yellow: "#EC971F",
        red: "#ff0000",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        fadeOut: {
          "0%": { opacity: "100" },
          "100%": { opacity: "0" },
        },
        translateL: {
          "0%": {
            left: "100%",
          },
          "100%": {
            left: "0",
          },
        },
        translateR: {
          "0%": {
            right: "100%",
          },
          "100%": {
            right: "0",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        translateL: "translateL 1s ease-in-out",
        translateR: "translateR 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
