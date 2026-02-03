/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF651C",     // orange
        secondary: "#ec4899",   // pink
        accent: "#212121",      // dark gray
        neutral: "#9ca3af",     // light gray
      },
    },
  },
  plugins: [],
};