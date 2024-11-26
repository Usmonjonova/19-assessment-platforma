/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#9b86d6',
        'secondary': '#9b6ed8',
        'dark-bg': '#121212',
        'light-bg': '#f9f9f9',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        sans: ['Arial', 'sans-serif'],
      },
      container: {
        center: true, 
        padding: '2rem', 
        screens: {
        
          sm: '100%', 
          md: '100%', 
          lg: '100%',
          xl: '1312px',
        },
      },
    },
  },
  plugins: [],
}
