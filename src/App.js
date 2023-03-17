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
  AspectRatio,
  Container,
  Icon
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import 'typeface-inter';

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
})

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
       
          
          <Heading fontFamily="heading"  fontWeight='bold' lineHeight={10} letterSpacing={-1} ml={4} mb={2}>squarefi</Heading>
        </Box>
        <Button display={['flex', 'flex', 'none', 'none']}variantColor="teal">Get Started</Button>
        <ButtonGroup spacing='2' display={['none', 'none', 'flex', 'flex']}>
          <ColorModeSwitcher />
            <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" variantColor="teal">Know more</Button>
</a>
          <Button variant="outline" variantColor="teal">Sign up</Button>
        </ButtonGroup>
      </Box>
      
        <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Make money from <br />
            <Text as={'span'} color={'green.400'}>
              your audience
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Center>
      <Box pt={20} pb={20}  maxW="1080px" mx={4} >


        <VStack spacing={8}>

          <Text fontWeight='bold' fontFamily="heading" fontSize='5xl' align="center" >
           The easiest way to raise funds</Text>
        
          <Text  fontFamily="heading" size='xl'>
         An all-in-one platform to start, manage and grow a decentralized crowdinvestment campaign</Text>
         
          
            <Button variantColor="teal">Join a waitlist</Button>
      
  <Text 
            fontWeight='extrabold' fontFamily="heading" size='5xl'>
        Ready for every project</Text>

 <ButtonGroup spacing='2' display='flex' flexWrap='wrap'>
          
          
  <Button variant="outline" variantColor="teal">Real Estate</Button>
          <Button variant="outline" variantColor="teal">Venture Capital</Button>
 <Button variant="outline" variantColor="teal">Trust</Button>
<Button variant="outline" variantColor="teal">Crowdfunding</Button>
<Button variant="outline" variantColor="teal">+ More</Button>
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
