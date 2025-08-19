// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg100: '#e0e0eb',
        gold: '#D3BB36',
        darkgold: '#2a2509',
        purple: '#4d0070',
        purple2: '#cf66ff',
        purple3: '#be33ff',
        lightpurple: '#efccff',
          text: '#eae9fc',
          background: '#060609',
          primary: '#db8fff',
          secondary: '#c9b12c',
          accent: '#a68ab7',
          cardColor: '#0d0b0f',
 
},

      keyframes: {
        float: {
          "0%": { transform: "rotate(15deg) skewX(10deg) skewY(5deg) translateY(0)" },
          "100%": { transform: "rotate(15deg) skewX(10deg) skewY(5deg) translateY(-20px)" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.7" },
        },
        pulsePill: {
          "0%, 100%": { transform: "scale(0.7)", opacity: "1" },
          "20%": { transform: "scale(1.05)", opacity: "0.7" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(3.5)", opacity: "0" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite alternate",
        pulseDot: "pulseDot 1.5s infinite ease-in-out",
        pulsePill: "pulseDot 1.5s infinite ease-in-out",
        ripple: "ripple 2s infinite ease-out",
      },
    },
  },
  plugins: [],
};

