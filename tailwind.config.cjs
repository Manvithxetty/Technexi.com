/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020e0b",
        secondary: "#a5c0b9",
        tertiary: "#11362c",
        "black-100": "#0e2720",
        "black-200": "#03231a",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #233a34",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/tech/herobg.png')",
      },
    },
  },
  plugins: [],
};
