module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue-400": "#415a77",
        "navy-blue-600": "#1B263B",
        "navy-blue-800": "#0D1B2A",
        "smoke-500": "#E0E1DD",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      gridTemplateColumns: {
        "blog-card": "1fr, 2fr",
        "experience-item": "1fr 2fr 1fr",
      },
      animation: {
        "fade-in-slide-up": "fade-in-slide-up 0.8s ease forwards",
        "fade-in-slide-up-500": "fade-in-slide-up 0.5s ease-out forwards",
        "fade-in-slide-up-1000": "fade-in-slide-up 1s ease-out forwards",
        "fade-in-slide-up-1500": "fade-in-slide-up 1.5s ease-out forwards",
        "fade-in-slide-up-2000": "fade-in-slide-up 2s ease-out forwards",
        "fade-in-slide-up-2500": "fade-in-slide-up 2.5s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-in forwards",
        "slide-left": "slide-left 0.5s ease forwards",
      },
      keyframes: {
        "fade-in-slide-up": {
          "0%, 75%": {
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
