import React from 'react';
import { Container, Stack, Box, Heading, Image, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from "../Logo"

function Footer() {
  return (
    <Container
      as={Stack}
      maxW={'100%'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Box display="flex" alignItems="center" justifyContent="right">
        <Logo />
        <Heading fontSize={['md', 'md', 'xl', '2xl']} fontWeight="bold" lineHeight={1} letterSpacing={-1} ml={4}>
          squarefi
        </Heading>
      </Box>
      <Link href="https://docs.squarefi.io/legal/privacy-policy">Privacy Policy</Link>
      <Link href="https://docs.squarefi.io/legal/terms-and-conditions"> Terms and Conditions </Link>
      <Link as={RouterLink} to="/legal">Legal</Link>
      <Text>© 2023 Squarefi Inc. All rights reserved</Text>
      </Container>
  )
}

export default Footer;