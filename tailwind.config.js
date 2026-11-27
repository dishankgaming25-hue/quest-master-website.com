

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        midnight: "#090611",
        purpleglow: "#8B5CF6",
        goldglow: "#F5C451"
      }
    }
  },
  plugins: []
};
