/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        disabled: '#aaaaaa',
        primary: '#94C947',
        'primary-hover': '#449d44',
        info: '#0e80b4',
      },
    },
  },
  plugins: [],
};
