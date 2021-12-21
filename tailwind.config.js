module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FFC947',
          'blue-dark': '#142850',
          secondary: '#9191A4',
          dark: {
            body: '#17171F',
          },
        },
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}
