const { default: daisyui } = require("daisyui");
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }, // Corrected to -100%
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' }, // Corrected to 100%
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/forms'),
  ],
};