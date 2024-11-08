/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ["Rajdhani", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        Darkblue: "#00194C",
        blue: "#0C59DB",
        gray: "#b6b9c0",
      },
      width: {
        custom: "1280px",
      },
      screens: {
        sm: "426px",
        md: "769px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
