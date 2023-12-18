import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/modules/**/*.{js,jsx,ts,tsx}`,
    `./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#000",
        "primary-hover": "#825526",
        secondary: "#F5EEE8",
        black: "#000",
      },
      textColor: {
        black: "#000", // replace with your text color
        white: "#fff",
      },
      borderColor: {
        primary: "#A36A2F", // replace with your border color
        "primary-hover": "#1c64b3", // replace with your border hover color
      },
      borderWidth: {
        primary: "1px",
      },
      fontSize: {
        primary: "14px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
