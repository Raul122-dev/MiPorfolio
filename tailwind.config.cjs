/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins : ['Poppins-Regular', 'sans-serif'],
        poppinsBold : ['Poppins-Bold', 'sans-serif'],
      },
      colors: {
        "main-stroke-color": "var(--main-stroke-color)",
        "transparent-stroke-color": "var(--transparent-stroke-color)",
        "second-color": "var(--second-color)"
      }
    },
  },
  plugins: [],
}
