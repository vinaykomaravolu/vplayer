/* eslint-disable global-require */
module.exports = {
  themeCustomId: ['amber', 'chess'],
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
        'theme-chess-primary': {
          1: '#f8f9fa',
          2: '#dee2e6',
          3: '#ced4da',
          hover: '#adb5bd',
          text: '#212529',
        },
        'theme-chess-secondary': {
          1: '#212529',
          2: '#343a40',
          hover: '#f8f9fa',
          text: '#212529',
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
