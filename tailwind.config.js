/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./node_modules/@radix-ui/themes/dist/themes.css", // Se estiver usando Radix Themes
    "./node_modules/shadcn-ui/dist/components/**/*.{js,jsx}", // Importante para o Shadcn UI
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}