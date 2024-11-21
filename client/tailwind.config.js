const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx},", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cyanns: {
          50: '#ECFEFF',  
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',  
          500: '#06B6D4',
          600: '#0891B2',  
          700: '#0E7490',
          800: '#155E75',  
          900: '#164E63',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/forms')

  ],
};