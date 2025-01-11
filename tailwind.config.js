/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02CCFE", // Example custom color (blue)
        secondary: "#1e293b",
      },
    },
  },
  plugins: [],
};
