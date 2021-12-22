import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.100', 'black')(props),
        lineHeight: 'base',
      },
    }),
  },
  fonts: {
    body: 'Open Sans, sans-serif',
  },
  fontWeights: {
    normal: 300,
    medium: 400,
    bold: 500,
  },
  config: {
    initialColorMode: 'dark',
    colorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
