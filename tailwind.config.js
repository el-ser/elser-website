module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    gridTemplateColumns: {
      "blog-card": "1fr, 2fr",
    },
    colors: {
      "navy-blue-400": "#415a77",
      "navy-blue-600": "#1B263B",
      "navy-blue-800": "#0D1B2A",
      "smoke-500": "#E0E1DD",
    },
    extend: {
      animation: {
        "fade-in-slide-up": "fade-in-slide-up 0.8s ease forwards",
        "fade-in": "fade-in 0.8s ease forwards",
        "slide-left": "slide-left 0.5s ease forwards",
      },
      keyframes: {
        "fade-in-slide-up": {
          "0%": {
            transform: "translateY(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(500px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
