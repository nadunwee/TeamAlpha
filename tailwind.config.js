/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        assassin: ["assassinCreed", "sans-serif"], // Add your custom font here
      },
      colors: {
        creedGray: "#3A3B3C", // Add your custom color here
      },
    },
  },
  plugins: [],
};
