/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      soyuz: ['Soyuz Grotesk'],
      ramillas: ['TT Ramillas'],
      ramillas_outline: ['TT Ramillas Outline']
    }
  },
  plugins: []
}
