/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1A73E8'
      },
      fontSize: {
        tablabel: '18px'
      }

    },
  },
  plugins: [],
}