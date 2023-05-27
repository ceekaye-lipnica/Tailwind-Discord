/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans:['gg sans','Noto Sans','Helvetica Neue','Helvetica','Arial','sans-serif'],
    },

    extend: {
      colors: {
        bayolet:'#404EED',
        porpol:'#5865f2',
        light:'#ffffff',
        dark:'#23272A',
        grey:'#f6f6f6',
      },
    },
  },
  plugins: [],
}

