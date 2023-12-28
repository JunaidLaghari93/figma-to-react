/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    extend: {
      fontFamily: {
        Raleway: "Raleway",
      },
      colors: {
        primary: '#DA722C', // Orange
        secondary: '#6F7DFB', // Light Purple
      },
    },
  },
  plugins: [],
}

