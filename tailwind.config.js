/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        grey: "#6B6B6B",
      },
      fontSize: {
        small: "14px",
        medium: "20px",
        heading: "24px",
      }
    },
  },
  plugins: [],
};

