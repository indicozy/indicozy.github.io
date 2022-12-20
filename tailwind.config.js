/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      background: '#ebeae9',
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',
      ...colors
    },
    extend: {},
    fontFamily: {
      domain: ['Steinbeck'], // TT Norms Pro, KZ Gropled, KZ Domain Display
      atyp: ['Atyp Regular Variable'],
      comic: ['Comic Code Ligatures']
    }
  },
  plugins: []
}
