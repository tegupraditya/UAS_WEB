/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#438951',
        borderColor: '#787878',
        bgColor: '#EDEDED',
      },
      screens: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
}