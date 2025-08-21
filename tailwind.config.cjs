/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },

      /* === Marquee / banner scroll === */
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // karena konten kita gandakan 2x
        },
      },
      animation: {
        "scrollX-fast": "scrollX 30s linear infinite",
        "scrollX-normal": "scrollX 50s linear infinite",
        "scrollX-slow": "scrollX 80s linear infinite",
      },
    },
  },
  plugins: [],
};
