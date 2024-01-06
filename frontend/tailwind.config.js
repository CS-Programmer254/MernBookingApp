/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/components/**/*.{html,js,ts,jsx,tsx}"
,"./components/**/*.{jsx,ts,tsx}",],
  theme: {
    extend: {},
    container:{
      padding:{
        md:"10rem",
      }
    },
  },
  plugins: [],
}

