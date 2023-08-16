/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-v1' : '#00529c'
      },
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'istok_web'  : ['Istok_Web']
      }
    },
  },
  plugins: [],
}