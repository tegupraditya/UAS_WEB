/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#438951',
      },
      screens: {
        '4xl': '1320px',
      },
    },
  },
  plugins: [],
}