/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { min: '1024px' },
    },
    extend: {
      colors: {
        white: '#fff',
        black: '#413C5F',
        purple: '#5845DD',
        'dark-purple': '#A39FC1',
        gray: '#8B85B1',
        'dark-gray': '#817CA5',
        'light-gray': '#C0BCDF',
        'icon-dark-gray': '#87839F',
        'icon-gray': '#C9C5E8',
        'card-gray': '#CECAEB',
        red: '#DA2121',
      },
    },
  },
  plugins: [],
}
