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
      fontSize: {
        giant: "96px",
        massive: "128px",
        "3xl": "1.875rem", // Customize size
        "4xl": "2.25rem", // Customize size
        "5xl": "2.5rem", // Customize size
      },
    },
  },
  plugins: [],
};
