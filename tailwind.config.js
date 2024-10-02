/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'poprock-gradient': 'linear-gradient(to right, #01F0FF 0%, #2EF1FD 48%, #0066FF 50%, #FA7FFD 0%, #E33131 100%)',
      },
    },
  },
  plugins: [],
}