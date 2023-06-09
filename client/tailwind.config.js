/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0029FF',
        secondary: '#F5F5F5',
        darkPrimary: '#0624c2'
      },
      maxWidth: {
        'primary': '1480px',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover']
    },
  },
  plugins: []
})

