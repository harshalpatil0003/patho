const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx},", flowbite.content(),],
  theme: {
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