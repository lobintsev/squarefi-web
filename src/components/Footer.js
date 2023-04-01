import React from 'react';
import { Container, Stack, Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import logo from '../static/logo.svg';

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
        <Image h="20px" pointerEvents="none" src={logo} />
        <Heading fontSize={"xl"} fontWeight="bold" lineHeight={1} letterSpacing={-1} ml={4}>
          squarefi
        </Heading>
      </Box>
      <Link href="https://docs.squarefi.io/legal/privacy-policy">Privacy Policy</Link>
      <Link href="https://docs.squarefi.io/legal/terms-and-conditions"> Terms and Conditions </Link>
      <Text>© 2023 Squarefi Inc. All rights reserved</Text>
      </Container>
  )
}

export default Footer;