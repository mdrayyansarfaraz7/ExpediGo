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
        'Montserrat':['Montserrat','sans-serif'] // Add Montserrat  as well if needed
      },
      screens: {
        'range-1110-1000': { max: '1110px', min: '1000px' },
      }
    },
  },
  plugins: [],
}

