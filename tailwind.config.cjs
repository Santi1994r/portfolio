module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1A5276',
        'blue-dark-hover': '#2471A3',
        'light-blue': '#154360'
      },
      backgroundImage: {"bg-santiago": "./public/images/santiago/santiagoruiz.jpeg"},
      spacing: {
        'h-9-screen': '90vh',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
