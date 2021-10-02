module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-blue': '#0C1247',
        'bg-black': '#010009',
        'custom-yellow': '#D4A661',
      },
      backgroundImage: {
        'smoke-element': "url('assets/smoke_element.svg')",
      },
      fontFamily: {
        'serif': 'Cormorant',
        'sans': 'Jost',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}