/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#171716",
        lightBlack: "#222222",
        customWhite: "#ebebeb",
      },
    },
    animation: {
      brightness: "brightness 2.2s linear infinite",
    },
    keyframes: {
      brightness: {
        "0%": {
          transform: "skew(-13deg) translateX(-100%)",
        },
        "100%": {
          transform: "skew(-13deg) translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};
