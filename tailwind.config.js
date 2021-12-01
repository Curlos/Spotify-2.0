const colors = require('tailwindcss/colors')
module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'phone-sm': {'max': '420px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      },
      flex: {
        '2': '2',
        '3': '3',
        '4': '4',
        '6': '6',
        '8': '8',
        '10': '10'
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        gray: colors.gray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightblue: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        spotify: "#1ED760"
        
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
      require('tailwind-scrollbar')
    ],
    variants: {
      extend: {},
      scrollbar: ['rounded']
    },
  }