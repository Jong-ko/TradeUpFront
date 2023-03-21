/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/cubes.png')",
      },
    },
  },
  plugins: [],
};
