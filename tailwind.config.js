/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

