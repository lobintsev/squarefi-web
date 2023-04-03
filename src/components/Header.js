import React from 'react';
import { Box, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import { Logo } from "../Logo"

function Header() {
  return (
    <Box
      position="sticky"
      py={4}
      px={4}
      top={0}
      zIndex={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backdropFilter="auto"
      backdropBlur="10px"
    >
       
      <Box display="flex" alignItems="center" justifyContent="right">
       

      <Logo />
        <Heading fontSize={['md', 'md', 'xl', '2xl']} fontWeight="bold" letterSpacing={-1} ml={2}>
          squarefi
        </Heading>
      </Box>
      <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
        <Button display={['flex', 'flex', 'none', 'none']} colorScheme="yellow">
          Learn More
        </Button>
      </a>
      <ButtonGroup spacing={4} display={['none', 'none', 'flex', 'flex']}>
       
        <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
          <Button  colorScheme={"purple"}>
            Learn more
          </Button>
        </a>
        <a href="https://sqrfspv.vercel.app/dashpanel/" target="_blank" rel="noopener noreferrer">
          <Button  colorScheme={"yellow"} >
            Launchpad
          </Button>
        </a>
      </ButtonGroup>
    </Box>
  );
}

export default Header;