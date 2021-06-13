module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "alert": "#E42831",
        "light-grey": "#929292"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
