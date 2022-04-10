module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vue-color-1': '#41B883',
        'vue-color-1-hover': '#2d805b', 
        'vue-color-2': '#34495E',
        'vue-color-2-hover': '#243341',
      }
    },
  },
  plugins: [],
}