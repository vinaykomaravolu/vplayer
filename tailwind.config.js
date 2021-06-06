/* eslint-disable global-require */
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'theme-amber-primary': {
          1: '#0B0E11',
          2: '#151A21',
          3: '#242C37',
          hover: '#151A21',
          text: 'white',
        },
        'theme-amber-secondary': {
          1: '#FFD700',
          2: '#F2AA4C',
          hover: '#F2AA4C',
          text: '#FFD700',
        },
        'theme-retro-primary': {
          1: '#4cc9f0',
          2: '#4895ef',
          3: '#4361ee',
          hover: '#4895ef',
          text: 'black',
        },
        'theme-retro-secondary': {
          1: '#f72585',
          2: '#b5179e',
          hover: '#b5179e',
          text: '#f72585',
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: { scrollbar: ['rounded'] },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwind-scrollbar'),
  ],
};
