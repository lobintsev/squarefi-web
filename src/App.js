import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  VStack,
  Button,
  extendTheme,
  Image,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  ButtonGroup,
  SimpleGrid,
  CardHeader,
  Center,
  AspectRatio
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import 'typeface-inter';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'white',
        _dark: { bg: 'gray.800' }
      },
      fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
      initialColorMode: 'light',
      useSystemColorMode: false
    },
  }
})




function App() {
  return (
    <ChakraProvider theme={theme}>
     
      <Box position="sticky" py={2} px={4} top={0} zIndex={1}  display="flex" alignItems="center" justifyContent="space-between" boxShadow='xs' backdropFilter='auto' backdropBlur='10px' _dark={{}} >
        <Box display="flex" alignItems="center" justifyContent="right" >
         <Logo h="20px" pointerEvents="none" />
       
          
          <Heading fontFamily="heading"  fontWeight='extrabold' lineHeight={10} letterSpacing={-2} ml={4} mb={2}>squarefi</Heading>
        </Box>
        <Button display={['flex', 'flex', 'none', 'none']}variantColor="teal">Get Started</Button>
        <ButtonGroup spacing='2' display={['none', 'none', 'flex', 'flex']}>
          <ColorModeSwitcher />
          <Button variantColor="teal">Get Started</Button>
          <Button variant="outline" variantColor="teal">Sign up</Button>
        </ButtonGroup>
      </Box>

      <Center>
      <Box pt={20} pb={20}  maxW="1080px" mx={4} >


        <VStack spacing={8}>

          <Heading 
            fontWeight='extrabold' fontFamily="heading" size='3xl'>
            Invest in the future of real estate
          </Heading>
          <Text  fontFamily="heading" size='xl'>
          Start at a minimum investment of 50USDT and access prime rental properties from anywhere in the world.</Text>
          <ButtonGroup spacing='2' size="lg" variant="outline">
            <Button href="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" >Invest now</Button>
            <Button variantColor="teal">Join a waitlist</Button>
          </ButtonGroup>


          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Card maxW='sm' borderRadius={15}>
              <CardHeader padding={0}> 
              <AspectRatio  ratio={16 / 9}>
                <Image
                src='https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
                alt='Green double couch with wooden legs'
                objectFit="cover"
                maxW="100%"
                overflow="hidden"
                borderTopRadius={15}

              />
              </AspectRatio>
              </CardHeader>

              <CardBody>

                <Stack spacing='3'>
                  <Heading size='md'>Apartments in Georgia</Heading>
                  <Text fontSize="sm">
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>

                </Stack>
              </CardBody>
              <Divider />
              <CardFooter display="flex" justifyContent="space-between" alignItems="center">
                <Text>
                  $450
                </Text>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' >
                    Invest now
                  </Button>
                  <Button variant='ghost' >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' borderRadius={15}>
              <CardHeader padding={0}> 
              <AspectRatio  ratio={16 / 9}>
                <Image
                src='https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                alt='Green double couch with wooden legs'
                objectFit="cover"
                maxW="100%"
                overflow="hidden"
                borderTopRadius={15}

              />
              </AspectRatio>
              </CardHeader>

              <CardBody>

                <Stack spacing='3'>
                  <Heading size='md'>Living room in Sofia</Heading>
                  <Text fontSize="sm">
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>

                </Stack>
              </CardBody>
              <Divider />
              <CardFooter display="flex" justifyContent="space-between" alignItems="center">
                <Text>
                  $450
                </Text>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' >
                    Invest now
                  </Button>
                  <Button variant='ghost' >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

            <Card maxW='sm' borderRadius={15}>
              <CardHeader padding={0}> 
              <AspectRatio  ratio={16 / 9}>
                <Image
                src='https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt='Green double couch with wooden legs'
                objectFit="cover"
                maxW="100%"
                overflow="hidden"
                borderTopRadius={15}

              />
              </AspectRatio>
              </CardHeader>

              <CardBody>

                <Stack spacing='3'>
                  <Heading size='md'>Condo in NewYork</Heading>
                  <Text fontSize="sm">
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>

                </Stack>
              </CardBody>
              <Divider />
              <CardFooter display="flex" justifyContent="space-between" alignItems="center">
                <Text>
                  $450
                </Text>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' >
                    Invest now
                  </Button>
                  <Button variant='ghost' >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

          </SimpleGrid>


        </VStack>

      </Box>

      </Center>
    </ChakraProvider>
  );
}

export default App;
