/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-text': '#2B283A',
        'clr-accent-orange': '#F55A5A'
      }
    },
  },
  plugins: [],
}