/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./projects/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"]
      }
    },
  },
  plugins: [],
}

