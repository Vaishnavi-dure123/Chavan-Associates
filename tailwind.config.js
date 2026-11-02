/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f2a24", 700: "#17382f", 600: "#1f4a3e" },
        brass: { DEFAULT: "#b8893a", light: "#d4aa5c" },
        paper: "#f6f5f1",
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
      },
      keyframes: {
        pop: {
          "0%": { opacity: 0, transform: "scale(.92) translateY(8px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        fade: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
      animation: { pop: "pop .25s ease-out", fade: "fade .25s ease-out" },
    },
  },
  plugins: [],
};
