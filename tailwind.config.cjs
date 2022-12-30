/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#50C1E9',
        'primary-dark': '#7A57D1',
        'accent': '#5BE7C4',
        'light-gray': '#F5F7FA',
        'text': '#393E46',
      }
    },
  },
  plugins: [],
}
