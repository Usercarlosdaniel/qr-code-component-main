/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "hsl(212, 45%, 89%)"
        },
        blue: {
          grayish: "hsl(220, 15%, 55%)",
          dark: "hsl(218, 44%, 22%)"
        }
      },
      fontFamily: {
        outfit: ["Outfit"]
      }
    },
  },
  plugins: [],
}

