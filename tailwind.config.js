module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FFC947",
          "blue-dark": "#142850",
          "blue-darker": "#0A1931",
          light: "#EFEFEF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
