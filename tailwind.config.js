const defaultTheme = require("tailwindcss/defaultTheme");
const plugins = require("tailwindcss/plugin");
const plugin = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        headerBold: ["Rubik", ...defaultTheme.fontFamily.sans],
        body: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      keyframes:{
        animatedtext: {
            from: {
              'width': '0'
            },
            to: {
              'width': '472px'
            }
        },
        animatedcursor:{
          from:{
            'border-right-color': 'rgba(0,0,0,0)'
          },
          to: {
            'border-right-color': 'transparent'
          }
        }
      },
      animation: {
        header: 'animatedtext 4s steps(29,end) 1s 1 normal both, animatedcursor 600ms steps(29,end) infinite'
      }
    },
  },
  variants: {},
  plugins: [plugin(function ({ addUtilities }) {})],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};