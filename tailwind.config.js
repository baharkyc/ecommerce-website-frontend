/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23A6F0",
        "secondary-1": "#23856D",
        "dark-background-color": "#252B42",
        "light-text-color": "#FFFFFF",
        "text-color": "#252B42",
        "second-text-color": "#737373",
        "light-gray-2": "#ECECEC"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
