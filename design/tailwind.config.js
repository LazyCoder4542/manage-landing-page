/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['sans-serif', ...defaultTheme.fontFamily.sans],
      'serif': ['sans-serif', ...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono],
    },
    colors: {
      'red-bright': '#f25f3a',
      'red-pale': '#ffefeb',
      'blue': '#242d52',
      'blue-dark': '#1d1e25',
      'gray': '#9095a7',
      'gray-light': '#fafafa',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

