/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Arimo',' sans-serif'],
        titleFont: ['Libre Baskerville', 'serif'],
        cri: ['Crimson Pro', 'serif'],
        sur: ['Suranna', 'serif'],
      },
      colors: {
        "main": "#0d1321",
        "secondary": "#f9f7f3",
        "third": "#98b9d2",
        "bodyColor": "#f9f7f3",
      },
    },
  },
  plugins: [require("daisyui")],
};
