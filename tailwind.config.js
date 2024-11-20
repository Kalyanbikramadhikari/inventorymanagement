// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1A73E8',
        background: '#F9FAFB',
        horizontalLine:'#ECEDEF', //stroke
        dialog: {
          black: '#1C1B1B',
          grayone:'#99A0A5'
        },
        error:{
          background:'#FFDDDE',
          text:'#C55D5F',
        },
        success:{
          background:'#E2FFDD',
          text:'#6CC55D'

        },
        button: {
          border: '#A6AABA', //subheading
          activebg: '#E8EFFB',
          inactivetext:'#64748B'
        },
        inputField: {
          border: '#ECEDEF', //stroke
          background:'#F9FAFB'
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