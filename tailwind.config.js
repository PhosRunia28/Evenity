/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1100px",
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#070148",
        linearText1: "#6D28D9",
        linearText2: "#E127FF",
        linearText3: "#FF2976",
        linearHero1: "#5B21B6",
        linearHero2: "#B321B6",
        linearHero3: "#4B1B98",
        linearHero4: "#0E0221",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
