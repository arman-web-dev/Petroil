/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
       
      },
     
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bannerM.png')",
      }
      

    },
  },
  plugins: [],
}