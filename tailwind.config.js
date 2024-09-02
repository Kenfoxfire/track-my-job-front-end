/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        color1: '#5290ce',
        color2: '#6ca9da',
        color3: '#87c2e7',
        color4: '#a1daf3',
        color5: '#bbf3ff',
        text: '#000000',
        buttons: 'rgb(14 165 233)',
        buttonsHover: 'rgb(3 105 161)',

        darkColor1: "#1a202c",
        darkColor2: "#2d3748",
        darkColor3: "#4a5568",
        darkColor4: "#718096",
        darkText: "#ffffff",
        darkButtons: "#2b6cb0",
        darkButtonsHover: "#2c5282",
        darkBackground: "#2d3748",
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
