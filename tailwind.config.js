// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    colors: {
      "light-purple": "#dcd6f7",
      "dark-purple": "#a6b1e1",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};
