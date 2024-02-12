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
        bodyFont: ['Roboto Mono',' monospace'],
        titleFont: ['Libre Baskerville', 'serif'],
      },
      colors: {
        "main": "#001534",
        "secondary": "#96b3de",
        "bodyColor": "#f3f2ee",
      },
    },
  },
  plugins: [require("daisyui")],
};
