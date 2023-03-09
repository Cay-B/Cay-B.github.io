/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/img/01.jpg')"
      },
      colors: {
        cayBlue: 'hsl(233,12%,13%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcsss typography')
  ],
}
