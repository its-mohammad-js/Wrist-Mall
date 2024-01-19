/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
        },
        secondary: {
          100: "#4d4d4d",
          200: "#333333",
          300: "#1a1a1a",
          400: "#0d0d0d",
        },
        accent: {
          50: "#fffae5",
          100: "#fff5cc",
          200: "#ffeb99",
          300: "#ffe066",
          400: "#ffd633",
          500: "#ffcc00",
          600: "#cca300",
          700: "#997a00",
          800: "#665200",
          900: "#332900",
          950: "#1a1400",
        },
      },
      keyframes: {
        swapeOut: {
          "0%": {
            transform: "translate(0px, 0)",
            opacity: 0.2,
          },
          "20%": {
            transform: "translate(60px, 0)",
            opacity: 0.2,
          },
          "40%": {
            transform: "translate(120px, 0)",
            opacity: 0.2,
          },
          "60%": {
            transform: "translate(180px, 0)",
            opacity: 0.2,
          },
          "80%": {
            transform: "translate(240px, 0)",
            opacity: 0.2,
          },
          "100%": {
            transform: "translate(300px, 0)",
            opacity: 0,
            display: "none",
          },
        },
        swapeIn: {
          "0%": {
            transform: "translate(0px, 0)",
            opacity: 1,
          },
          "20%": {
            transform: "translate(-60px, 0)",
            opacity: 0.8,
          },
          "40%": {
            transform: "translate(-120px, 0)",
            opacity: 0.6,
          },
          "60%": {
            transform: "translate(-180px, 0)",
            opacity: 0.4,
          },
          "80%": {
            transform: "translate(-240px, 0)",
            opacity: 0.2,
          },
          "100%": {
            transform: "translate(-300px, 0)",
            opacity: 0,
          },
        },
        fadeIn: {
          "0%": {
            width: "10%",
          },
          "20%": {
            width: "20%",
          },
          "40%": {
            width: "40%",
          },
          "60%": {
            width: "60%",
          },
          "80%": {
            width: "80%",
          },
          "100%": {
            width: "100%",
          },
        },
        fadeOut: {
          "0%": {
            width: "100%",
          },
          "20%": {
            width: "80%",
          },
          "40%": {
            width: "60%",
          },
          "60%": {
            width: "40%",
          },
          "80%": {
            width: "20%",
          },
          "100%": {
            width: 0,
            visibility: "hidden",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        upDown: {
          "0%": {
            transform: "translate(10px, -40px)",
            opacity: 1,
          },
          "20%": {
            transform: "translate(10px, 10px)",
            opacity: 0.8,
          },
          "40%": {
            transform: "translate(10px, 20px)",
            opacity: 0.6,
          },
          "60%": {
            transform: "translate(10px, 30px)",
            opacity: 0.6,
          },
          "80%": {
            transform: "translate(10px, 40px)",
            opacity: 0.4,
          },
          "100%": {
            transform: "translate(10px, 40px)",
            opacity: 0.2,
          },
        },
        zoomIn: {
          "0%": {
            transform: "translate(10px, -40px)",
            opacity: 1,
          },
          "20%": {
            transform: "translate(10px, 10px)",
            opacity: 0.8,
          },
          "40%": {
            transform: "translate(10px, 20px)",
            opacity: 0.6,
          },
          "60%": {
            transform: "translate(10px, 30px)",
            opacity: 0.6,
          },
          "80%": {
            transform: "translate(10px, 40px)",
            opacity: 0.4,
          },
          "100%": {
            transform: "translate(10px, 40px)",
            opacity: 0.2,
          },
        },
      },
      animation: {
        swapeOut: "swapeOut 0.8s linear",
        swapeIn: "swapeIn 0.8s linear",
        typing: "typing 1s steps(40, end)",
        infinityType: "typing 1.5s steps(40, end) infinite",
        upDown: "upDown 1s linear infinite",
      },
    },
  },
  plugins: [],
};
