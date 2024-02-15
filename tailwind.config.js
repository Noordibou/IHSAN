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
        title: ['Libre Baskerville', 'serif'],
        subTitle: ['Noto Sans', 'sans-serif'],
        body: ['Poppins',' sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
      colors: {
        "main": "#0d1321",
        "secondary": "#f9f7f3",
        "third": "#98b9d2",
        // "third": "#aec3b0",
        "bodyColor": "#f9f7f3",
      },
    },
  },
  plugins: [require("daisyui")],
};
