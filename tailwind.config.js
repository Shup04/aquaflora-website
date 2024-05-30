const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoserif: ["Noto Serif", "sans-serif"],
      },
      spacing: {
        100: "25rem",
        125: "30rem",
        150: "35rem",
        175: "40rem",
      }
    },
    colors: {
      black: colors.black,
      purple: "#7773bf",
      pink: "#a7a5cc",
      darkpurple: "#634880",
      white: colors.white,
      lightblack: "#141414",
      bg: "hsla(243, 60%, 95%, 1)",
      dp: "#525074",
      gray: colors.gray,
      transparent: colors.transparent,
    },
    screens: {
      //xxs: "320px",
      //xs: "425px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "750px",
      // => @media (min-width: 768px) { ... }

      lg: "831px", // added 1 because text was collapsing at 830
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    transitionProperty: ["hover", "focus"],
    extend: {
      transform: ["hover", "focus", "active"],
    },
  },
  plugins: [],
}
