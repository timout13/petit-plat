/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.js", "./src/pages/*.js", "./src/components/*.js"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      main: ["Anton", "sans-serif"],
      body: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        warning: "#F8D36F",
      },
      backgroundImage: {
        "hero-pattern": "url('/imgs/hero_bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      padding: {
        container: "69px",
      },
    },
  },
  plugins: [],
};
