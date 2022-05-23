module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffd73c",
          secondary: "#da3642",
          accent: "#000000",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
