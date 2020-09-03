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
      keyframes: {
        "animate-text": {
          from: {
            width: "0",
          },
          to: {
            width: "300px",
          },
        },
        "animate-cursor": {
          from: {
            "border-bottom-color": "rgba(0,0,0,0)",
          },
          to: {
            "border-bottom-color": "transparent",
          },
        },
      },
      animation: {
        typewriter: "animate-text 4s steps(30,end) 1s 1 normal both",
        nextkey: "animate-cursor 600ms steps(30,end) infinite",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};