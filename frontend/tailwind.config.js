/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "blue",
          secondary: "teal",
        },
      },
    ],
  },
  content: [
     "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

