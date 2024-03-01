/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#039178',
        bgGreentea: '#E6EADC',
        bgGreen: '#01685B',
        bgCream: '#F0F1F5',
        hoverGreen: '#025B57',
        gray: 'rgb(104 104 104 / .9)',
        lightGray: '#F8F8F8',
        orange: '#f1c40f'
      },
      fontFamily: {
        fontRoboto: ["Roboto Slab", "serif"],
        fontJosefin: ["Josefin Sans", "sans-serif"]
      },
      backgroundImage: {
        teamBg: ["linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))", "url('/image/team-bg.webp')"],
        dark: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        dot: "radial-gradient(black 1px, transparent 0)",
        gold: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        gold2: ["radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%)",
          "radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

