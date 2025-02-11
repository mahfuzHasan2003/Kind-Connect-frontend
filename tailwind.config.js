/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#7C3AED",
          "primary-content": "#F3E8FF",
          secondary: "#0D9488",
          accent: "#f2f4f3",
          neutral: "#f2f2f2",
          "base-100": "#F4F1FA",
          "base-200": "#E0E2E1",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#7C3AED",
          "primary-content": "#F3E8FF",
          secondary: "#06B6D4",
          accent: "red",
          neutral: "#f2f2f2",
          "base-100": "#1E1B29",
          "base-200": "#252131",
        },
      },
    ],
  },
};
