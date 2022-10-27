// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: 'url("./assets/images/home/tablet/image-hero.jpg")',
        navbar: {
          emptyCart: 'url("./public/assets/images/cart/empty-cart.png")',
        },
      },
    },
  },
  plugins: [],
};
//
