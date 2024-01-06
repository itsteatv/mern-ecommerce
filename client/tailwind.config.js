/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ">=445px": { "min": "9.375em", "max": "28.125em" },
        ">=340px": { "min": "9.375em", "max": "21.25em" },
      },
      fontSize: {
        "searchInputPlaceholder": "clamp(0.5rem, 4.2vw + 0.1rem, 1rem)",
        "footer": "clamp(0.25rem, 5.3vw - 0.2rem, 0.875rem)"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}