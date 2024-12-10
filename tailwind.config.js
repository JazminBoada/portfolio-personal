/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#101010",
        lightBlack: "#222222",
        customWhite: "#ebebeb",
      },
    },
  },
  plugins: [],
};
