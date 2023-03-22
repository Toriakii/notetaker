/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['black']
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
