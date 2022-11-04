/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgnoise':"url('/noise.png')",
      },
      colors:{
        blurblack:'#1C1C1C',
        lightgray:'#CFCFCF',
        textgray:'#666666',
        lightblack:'#222222',
        gray32:'#525252',
        thumborange:'#ffcb49',
        blackopacity:'#131313',
        bluegradient:'#5135ff1a' ,
        lightblue:'#5236ff'

      },
      fontSize:{
        large:'46px',
        medium:'40px',
        small:'20px',
        smallx:'16px',
        mediumx:'32px',
        extralarge:'175px',
        

      },
      fontFamily: {
        sans: ["Mont", "arial"],
        MontHeavy: ["MontHeavy", "arial"],
        MontSemiBold: ["MontSemiBold", "arial"],
        MontBold: ["MontBold", "arial"],
      },
      lineHeight:{
        large:'58px',
        small:'30px',
        smallx:'12px',
        medium:'44px',
        middle:'26px'

      },
      width:{
        small:'256px'
      }
      
      
    },
  },
  plugins: [],
}
