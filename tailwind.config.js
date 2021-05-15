/* eslint-disable global-require */
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
  plugins: [require('@tailwindcss/custom-forms')],
};
