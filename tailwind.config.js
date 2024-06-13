/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html"],
  theme: {
    extend: {},
    screens: {
      taplet: "640px",
      labtop: "1024px",
      desktop: "1280px",
      xs: "450px",
      sm: { max: "670px" },
      md: { min: "768px", max: "1023px" },
    },
    colors:{
      teal:"red"
    }
  },
  plugins: [],
};
