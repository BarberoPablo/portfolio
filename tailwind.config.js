/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Esto habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "font-color": "rgba(var(--font-color))",
        "gray-background": "rgba(var(--gray-background))",
        "light-gray-background": "rgba(var(--light-gray-background))",
        "footer-background": "rgba(var(--footer-background))",
        "secondary-background": "rgba(var(--secondary-background))",
        "icon-hover": "rgba(var(--icon-hover))",
        "chip-background": "rgba(var(--chip-background))",
      },
    },
  },
  plugins: [],
};
