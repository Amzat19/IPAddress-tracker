/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgMobile': "url('/src/assets/pattern-bg-mobile.png')",
        'bgDesktop': "url('/src/assets/pattern-bg-desktop.png')"
      },
      colors: {
        'veryDark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      }
    },
    screens: {
      'xs': '375px',
      'sm': '500px',
      'md': '768px'
    }
  },
  plugins: [],
}