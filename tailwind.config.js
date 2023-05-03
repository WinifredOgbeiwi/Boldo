/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A2640",
        grey: "#777777",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        "open-san": ["Open Sans","sans-serif"],
      },
    },
    plugins: [],
  },
};
