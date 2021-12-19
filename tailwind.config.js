module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FFC947",
          "blue-dark": "#142850",
          'secondary': '#9191A4',
          dark: {
            body: "#17171F",
          }
        },
      },
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
};
