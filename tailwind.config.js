module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      'sans': ['Arial', 'ui-sans-serif', 'system-ui'],
      'body': ['Arial', 'ui-sans-serif', 'system-ui'],
      'header': ['Romedance'],
      'display': ['Loves']
    },
    colors: {
      green: {
        light: '#00DFDF',
        DEFAULT: '#008080',
        dark: '#006060'
      },
      black: {
        DEFAULT: '#231F20',
      },
      gray: {
        DEFAULT: '#808285'
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
