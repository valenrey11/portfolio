/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondito: "url('/src/assets/fondototal.svg')",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  plugins: [],
};
