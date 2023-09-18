import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      addCommonColors: true,
      layout: {},
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#602AF2",
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#FFFFFF",
              // DEFAULT: "#8000FF",
            },
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#FFFFFF",
            primary: {
              foreground: "#000000",
              DEFAULT: "#602AF2",
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#FFFFFF",
              // DEFAULT: "#8000FF",
            },
          }
        },
      },
    })
  ],

}
