/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1A73E8',
        background: '#F9FAFB',
        dialog: {
          black: '#1C1B1B'
        },
        button: {
          border: '#A6AABA',
          activebg: '#E8EFFB',
          inactivetext:'#64748B'
        },
        inputField: {
          border: '#ECEDEF' //stroke
        }

      },
      fontSize: {
        tablabel: '18px',
        subHeading: '16px',

      },
      borderRadius: {
        borderRadius: '5px'
      },
      // borderWidth:{
      //   button:'1px'
      // }

    },
  },
  plugins: [],
}