/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      background: '#ece7e1',
      foreground: 'rgb(26, 24, 24)',
      back_dark: '#27272a',
      fore_dark: '#e4e4e7',
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',
      ...colors
    },
    extend: {},
    fontFamily: {
      runs: ['TT Runs'], // TT Norms Pro, KZ Gropled, KZ Domain Display
      norms: ['TT Norms Pro'],
      comic: ['Comic Code Ligatures']
    }
  },
  plugins: []
}
