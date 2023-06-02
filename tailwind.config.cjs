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
      spacing: {
        'h-9-screen': '90vh',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
