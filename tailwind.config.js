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
      },
      colors: {
        "main": "#001534",
        "secondary": "#96b3de",
        "bodyColor": "#f7f4e9",
        "third": "#C6AA80",
      },
    },
  },
  plugins: [require("daisyui")],
};
