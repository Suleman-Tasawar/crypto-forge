/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      'md': '768px',
      'lg': '900px',
    },
    extend: {
      colors: {
        'cdark-purple': '#1D2671',
        'cdark-blue': '#2B32B2',
        'csolid-blue': '#2B32B2',
        'clight-grey': '#E0E0E0',
        'cteal': '#1ABC9C',
        'ccoral': '#FF6F61',
      }
    },
  },
  plugins: [],
}