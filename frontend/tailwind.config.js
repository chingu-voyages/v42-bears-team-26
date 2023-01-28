/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {
      white: 'white',
      gray: '#A7A7A7',
      primaryColor_white: '#FBF7F4',
      primaryColor_gray: '#637381',
      primaryColor_beige: '#886449',
      secondaryColor_black: '#121212',
      secondaryColor_slate: '#737373',
      secondaryColor_lace: '#EEE6E2',
      secondaryColor_aegean: '#39475B',
      secondaryColor_denim: '#001533',
      linearColor_orange: '#F8BD8D',
      linearColor_pink: '#E0C7C4',
      linearColor_green: '#1D7D81',
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    }
  },
},
  plugins: [],
};