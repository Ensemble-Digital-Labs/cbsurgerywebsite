/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        'dark-teal': '#00B9BA',
        'light-teal': '#71CAD2',
        'extra-dark-teal':'#045C60',
        'gray':'#E7E7E7',
        'gray2':'#F7F7F7',
        'paragraph-font':'#211C1A',
        'extra-light-teal':'#F1F8FF',         
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

