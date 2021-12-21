import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
