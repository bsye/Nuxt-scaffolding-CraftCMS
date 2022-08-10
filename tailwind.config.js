const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#d1d1d1",
          200: "#a3a3a3",
          300: "#767676",
          400: "#484848",
          500: "#1a1a1a",
          600: "#151515",
          700: "#101010",
          800: "#0a0a0a",
          900: "#050505",
        },
      },
      fill: {
        white: "#fff",
        black: "#000",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};