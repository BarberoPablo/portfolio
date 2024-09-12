/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Esto habilita el modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a202c",
          light: "#2d3748",
          dark: "#171923",
        },
        secondary: {
          DEFAULT: "#3182ce",
          light: "#4299e1",
          dark: "#2c5282",
        },
        background: {
          DEFAULT: "#f7fafc",
          dark: "#1a202c",
        },
        text: {
          DEFAULT: "#2d3748",
          light: "#4a5568",
          dark: "#e2e8f0",
        },
      },
    },
  },
  plugins: [],
};
