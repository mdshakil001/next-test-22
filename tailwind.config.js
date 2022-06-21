module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        circle: "circle",
      },
      fontFamily: {
        title: ["Quicksand", "sans-serif"],
        general: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          10: "#F4D7C3",
          50: "#F6AB78",
          100: "#F58232",
        },
        secondary: {
          5:"#edf4f8",
          10: "#CEE2EB",
          50: "#AED5E7",
          100: "#91C9E3",
        },
        typo: "#58595B",
        heading: "#333333",
        table:"#a4c9da"
      },
      screens: {
        "3xl": "1920px",
        'md': '768px',
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-4/5": "80vh",
      }),
      width: {
        page: "1280px",
      },
      minWidth: {
        48: '192px',
        72: '288px',
      },
      maxWidth: {
        '3/4': '75%',
      },
      maxHeight:{
        banner:"640px"
      },
      maxWidth: {
        btn: "320px",
      },
      minHeight: {
        96: "384px",
        20:"80px"
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#91C9E3",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui", "@tailwindcss/typography")],
};
