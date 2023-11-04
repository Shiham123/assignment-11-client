const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      colorOne: '#190019',
      colorTwo: '#2B124C',
      colorThree: '#522B5B',
      colorFour: '#854F6C',
      colorFive: '#DFB6B2',
      colorSix: '#FBE4D8',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
});
