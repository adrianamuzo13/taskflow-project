/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'oscar': ['"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        'bg': '#fdf0d5',
        'primary': '#540b0e',
        'secondary': '#9e2a2b',
        'card': '#eae2ab',
        'gold': '#fcbf49',
      }
    },
  },
  plugins: [],
}