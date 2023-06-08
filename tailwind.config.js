/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          'main': '#de1e29'
        }
      },
      spacing: {
        '31': '31rem',
      },
      width: {
        // 'laptop': '2340px',
        'laptop': '2280px',
        'laptop-gallery': '2000px',
        'laptop-waves': '2350px',
      },
      margin: {
        'martialarts': '800px'
      }
    },
  },
  plugins: [],
}

