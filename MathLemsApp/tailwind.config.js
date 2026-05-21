/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        fantasy: {
          bg:       '#1a0033',
          bgLight:  '#2d0052',
          purple:   '#6B21A8',
          gold:     '#FFD700',
          goldDark: '#B8860B',
          red:      '#8B0000',
          fire:     '#FF4500',
          text:     '#F5E6FF',
          textDim:  '#C084FC',
        },
      },
      fontFamily: {
        quicksand:      ['Quicksand-Regular'],
        'quicksand-b':  ['Quicksand-Bold'],
        'quicksand-sb': ['Quicksand-SemiBold'],
        'quicksand-m':  ['Quicksand-Medium'],
        'quicksand-l':  ['Quicksand-Light'],
      },
    },
  },
  plugins: [],
};
