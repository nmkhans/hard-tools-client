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
          accent: "#231f1e",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
