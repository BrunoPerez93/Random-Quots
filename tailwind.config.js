/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'c-gray': '#4A5567',
      'c-light-gray': '#97A3B6',
      'c-white': '#fff',
      'c-blue': '#6466E9',
    },
    screens: {
      'xs': '100px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

