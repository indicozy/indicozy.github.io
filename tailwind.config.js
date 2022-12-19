/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      domain: ['Steinbeck'], // TT Norms Pro, KZ Gropled, KZ Domain Display
      atyp: ['Atyp Regular Variable'],
      comic: ['Comic Code Ligatures']
    }
  },
  plugins: []
}
