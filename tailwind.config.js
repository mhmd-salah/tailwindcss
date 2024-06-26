/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/index.html"],
  theme: {
    backgroundSize:{
      "50":"50%",
      "cover":"cover"
    },
    container: {
      center: true,
      padding: "18px",
    },
    extend: {
      backgroundImage: {
        "landing": "url('/landing.jpg')",
      },
      // spacing: {
      //   "010": "1px",
      // },
    },
    // screens: {
    //   taplet: "640px",
    //   labtop: "1024px",
    //   desktop: "1280px",
    //   xs: "450px",
    //   sm: { max: "670px" },
    //   md: { min: "768px", max: "1023px" },
    // },
    // colors: {
    //   teal: "red",
    // },
  },
  plugins: [],
};
