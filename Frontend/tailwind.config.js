/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'calc': 'calc(100% - 200px)' 
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

