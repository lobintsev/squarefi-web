// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
          'html, body': {
              _dark: { bg: 'gray.800' }
          }}},
          fonts: {
            body: "LoosWide, sans-serif",
            heading: "LoosWide, sans-serif",
            mono: "Menlo, monospace",
          },
          initialColorMode: 'dark',
          useSystemColorMode: false,
});

export default theme;
