/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          400: 'hsl(237, 18%, 59%)',
          600: 'hsl(236, 21%, 26%)',
          800: 'hsl(235, 16%, 14%)',
          900: 'hsl(234, 17%, 12%)',
        },
        softRed: {
          400: 'hsl(345, 95%, 68%)',
        },
      },
      fontFamily: {
        sans: ['Red Hat Text', 'sans-serif'],
      },
      backgroundImage: {
        stars: 'url(./src/images/bg-stars.svg)',
        pattern: 'url(./src/images/pattern-hills.svg)',
      },
    },
  },
  plugins: [],
}
