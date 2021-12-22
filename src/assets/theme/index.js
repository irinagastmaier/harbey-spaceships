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
    body: 'Lato, sans-serif',
    heading: 'Forum, sans-serif',
    mono: 'Menlo, monospace',
  },
  config: {
    initialColorMode: 'dark',
    colorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
