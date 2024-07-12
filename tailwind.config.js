/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      color1: '#5290ce',
      color2: '#6ca9da',
      color3: '#87c2e7',
      color4: '#a1daf3',
      color5: '#bbf3ff',
      text: '#000000',
    },
},
  },
  plugins: [],
}