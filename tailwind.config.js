const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0E11',
        primary2: '#151A21',
        primary3: '#242C37',
        secondary: '#FFD700',
        secondary2: '#F2AA4C',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '::-webkit-scrollbar-track': {
          backgroundColor: '#000',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
