import { extendTheme } from '@chakra-ui/react';

export const brand = {
  primary: '#ff2c9c',
  secondary: '#173d7a',
  lightgrey: '#8a9dbc',
};

const theme = extendTheme({
  colors: {
    brand: {
      ...brand,
      50: '#ffe1f6',
      100: '#ffb1dc',
      200: '#ff7ec4',
      300: '#ff4cab',
      400: '#ff1a93',
      500: brand.primary,
      600: '#b4005f',
      700: '#820044',
      800: '#500029',
      900: '#200010',
    },
  },
});

export default theme;
