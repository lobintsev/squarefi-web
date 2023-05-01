// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
          'html, body': {
              bg: 'gray.900',
              color: "white"
          }}},
          fonts: {
            body: "Space Grotesk, sans-serif",
            heading: "Space Grotesk, sans-serif",
            mono: "Menlo, monospace",
          }
          
         
        
});

export default theme;
