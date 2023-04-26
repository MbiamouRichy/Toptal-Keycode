/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: ['rgb(59, 58, 59)'],
        secondary: ['rgb(81, 85, 249)'],
        tertiaire: ['rgb(85, 83, 85)'],
        quatro: ['rgb(29, 138, 216)']
      },
      fontFamily: {
        sans: ["'Space Grotesk', sans-serif"]
      },
      borderColor: {
        secondary: ['rgb(29, 138, 216)']
      },
      textColor: {
        secondary: ['rgb(81, 85, 249)']
      }
 
    },
  },
  plugins: [],
}

