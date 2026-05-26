/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    // Screens ko theme ke andar rakha hai (Standard practice)
    screens: {
      'sm': '567px',   // Mobile
      'md': '768px',   // Small Tablets
      'lg': '1024px',  // Small Laptops
      'xl': '1280px',  // Laptops/Desktops
      '2xl': '1400px', // Large screens
    },
  },
  plugins: [],
}


