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
        blur:'rgba(0,0,0,.3);',
      },

      backgroundImage:{
        'mobile': "url('./img/mobile-banner.svg')",
        'desktop': "url('./img/banner-bg1.svg')",
        'sparkle': "url('./img/sparkle.svg')",
      },

      boxShadow:{
        'md': '0 8px 15px rgba(0,0,0,.2);',
      },

      screen: {
        'lg': '1080px',
      }
    },
  },
  plugins: [],
}

