import React from 'react';
import { Container, Stack, Box, Heading, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from "../Logo"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container
      as={Stack}
      maxW={'100%'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'center' }}
      align={{ base: 'center', md: 'center' }}
    >
      
    
      <Link href="https://docs.squarefi.io/legal/privacy-policy">Privacy Policy</Link>
      <Link href="https://docs.squarefi.io/legal/terms-and-conditions">Terms and Conditions</Link>
   
      <Text>© {currentYear} Squarefi Inc. All rights reserved</Text>
      
      </Container>
  )
}

export default Footer;