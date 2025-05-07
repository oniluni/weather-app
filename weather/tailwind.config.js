/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-primary': '#FF80AB',
        'pink-light': '#FFB2C9',
        'pink-dark': '#C94F7C',
        'white-custom': '#FFFFFF',
        'white-off': '#F8F8F8',
      },
    },
  },
  plugins: [],
}