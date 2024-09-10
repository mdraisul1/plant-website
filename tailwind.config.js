/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '340px',
      'md': '540px',
      'lg': '768px',
      'xl': '1180px',
      '2xl': '1440px',
    },
    extend: {},
    keyframes: {
      move:{
        "50%":{transform:"translateY(-1rem)"}
      },
      rotate: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      scale: {
        '0%': { transform: 'scale(0.8)' },
        '50%': { transform: 'scale(1.2)' },
        '100%': { transform: 'scale(0.8)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-1rem)' },
      },
      floatReverse: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(1rem)' },
      },
    },
    animation: {
      moveingY: 'move 4s ease-in-out infinite',
      rotate: 'rotate 15s linear infinite',
      scale: 'scale 15s linear infinite',
      float: 'float 5s ease-in-out infinite',
      floatReverse: 'floatReverse 5s ease-in-out infinite',
    },
    fontFamily: {
      Jost: ['Jost', 'sans-serif'],
      Lobster : ["Lobster", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px',
      }
    },
  },
  plugins: [],
}