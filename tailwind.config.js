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
      },
      animation: {
        float: "float 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

