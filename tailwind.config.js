module.exports = {
  purge: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-bg': 'var(--dark-bg-color)',
      },
      textColor: {
        'light-text': 'var(--light-text-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}