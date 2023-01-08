/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        line: "#CFCFCF",
        pill: "#F8FAFB",
        white: "#ffffff",
        text: "#1E1E1E",
        accent: "#333333",
        black: "#000000",
        success: "#52965E",
        warning: "#E55541",
        error: "#D71E0E",
        info: "#778CA2",
      },
    },
  },
  plugins: [require("daisyui")],
};
