/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    fontFamily: {
      display: ['Ubuntu', 'cursive'],
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
    extend: {
      fontSize: {
        h3: ['48px', '72px'],
        h4: ['30px', '45px'],
        h5: ['24px', '36px'],
        body1: ['16px', '24px'],
        body2: ['14px', '21px'],
        subtitle: ['16px', '24px'],
        caption: ['12px', ['18px']],
      },
      colors: {
        primary: {
          light: '#00D1FF',
        },
        tutor: {
          main: '#FF9B33',
        },
        grey: {
          400: '#B2B2B2',
          500: '#929292',
          600: '#6A6A6A',
        },
        background: {
          main: '#121212',
          light: '#1B1B1B',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
