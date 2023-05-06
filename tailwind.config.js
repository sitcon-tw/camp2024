/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': '"Noto Sans TC", Arial, sans-serif',
    },
    container: {
      padding: '1rem',
      center: true,
      screens: {
        xl: '1024px',
      },
    },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
