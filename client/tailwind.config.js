const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx},", flowbite.content(),],
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
        current: 'currentColor'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/forms')

  ],
};