/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['"Instrument Serif"', 'serif'], // Add Instrument Serif
        'inter': ['Inter', 'sans-serif'], // Add Inter as well if needed
      },
    },
  },
  plugins: [],
}

