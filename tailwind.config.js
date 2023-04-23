/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          000: "#282C35",
          100: "#242830",
          200: "#20232A",
          300: "#1C1F25",
          400: "#14161B",
          500: "#101215",
          600: "#0C0D10",
          700: "#08090B",
          800: "#040405",
          900: "#000000",
        },
        light: {
          000: "#282C35",
          100: "#3E4149",
          200: "#53565D",
          300: "#696B72",
          400: "#7E8086",
          500: "#A9ABAE",
          600: "#BFC0C2",
          700: "#D4D5D7",
          800: "#EAEAEB",
          900: "#FFFFFF",
        },
      },
      fontFamily: {
        'MonaSans': ['Mona Sans', 'sans-serif'],
        'HubotSans': ['Hubot Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
