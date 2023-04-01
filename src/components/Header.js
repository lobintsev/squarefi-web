import React from 'react';
import { Box, Heading, Image, Button, ButtonGroup } from '@chakra-ui/react';

import logo from '../static/logo.svg';

function Header() {
  return (
    <Box
      position="sticky"
      py={2}
      px={4}
      top={0}
      zIndex={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="xs"
      backdropFilter="auto"
      backdropBlur="10px"
      _dark={{}}
    >
      <Box display="flex" alignItems="center" justifyContent="right">
        <Image h="20px" pointerEvents="none" src={logo} />
        <Heading fontSize={"xl"} fontWeight="bold" lineHeight={1} letterSpacing={-1} ml={4}>
          squarefi
        </Heading>
      </Box>
      <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
        <Button display={['flex', 'flex', 'none', 'none']} variantcolor="teal">
          Learn More
        </Button>
      </a>
      <ButtonGroup spacing="2" display={['none', 'none', 'flex', 'flex']}>
       
        <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" variantcolor="teal">
            Learn more
          </Button>
        </a>
      </ButtonGroup>
    </Box>
  );
}

export default Header;