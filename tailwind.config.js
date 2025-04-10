/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary-color": "#23A6F0",
        "secondary-1": "#17213C",
        "dark-background-color": "#252B42",
        "light-text-color": "#FFFFFF",
        "text-color": "#252B42",
        "second-text-color": "#737373",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
