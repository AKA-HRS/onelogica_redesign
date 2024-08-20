import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        rotate: "rotate 5s linear infinite",
        "slide-down": "slideDown 0.2s forwards",
        "scale-size": "scale-size 0.6s cubic-bezier(0.61, 1, 0.88, 1)",
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        slideDown: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(300px) scale(0.5)",
            opacity: "1",
          },
        },
        "scale-size": {
          "0%": { transform: "scale(0.91)" },
          "100%": { transform: "scale(1)" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
