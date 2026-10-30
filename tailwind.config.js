/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050709",
        panel: "#0a0e12",
        line: "rgba(151, 183, 205, .18)",
        ice: "#63c8ff"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      }
    }
  },
  plugins: []
};