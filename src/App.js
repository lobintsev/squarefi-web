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
  Icon,
  useColorModeValue,
  createIcon,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Wrap,
  WrapItem,
  VisuallyHidden
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import 'typeface-inter';
import 'typeface-montserrat';
import logo from './logo.svg';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'white',
        _dark: { bg: 'gray.800' }
      }}},
      fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
        mono: "Menlo, monospace",
      },
      initialColorMode: 'light',
      useSystemColorMode: false,
  
})


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
     
      <Box position="sticky" py={2} px={4} top={0} zIndex={1}  display="flex" alignItems="center" justifyContent="space-between" boxShadow='xs' backdropFilter='auto' backdropBlur='10px' _dark={{}} >
        <Box display="flex" alignItems="center" justifyContent="right" >
        
         <Image h="20px" pointerEvents="none" src={logo}/>
          
          <Heading fontSize={"xl"} fontWeight='bold' lineHeight={1} letterSpacing={-1} ml={4}>squarefi</Heading>
        </Box>
        <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
        <Button display={['flex', 'flex', 'none', 'none']}variantColor="teal">Learn More</Button> 
        </a>  
        <ButtonGroup spacing='2' display={['none', 'none', 'flex', 'flex']}>
          <ColorModeSwitcher />
            <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
  <Button variant="outline" variantColor="teal">Know more</Button>
</a>        
</ButtonGroup>
      </Box>
      <Center>
      <Box mx={4}>
        <Box height={"100vh"} py={200}>
      
        <Stack  textAlign={'center'} >
          <Heading mb={4}>
            The easiest way <br/> to raise funds
          </Heading>
          <Text >
            An all-in-one platform to start, manage and grow a decentralized crowdinvestment campaign
          </Text>
        
        <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
            <Button mt={10}  size='lg'>
             Get Started
            </Button> </a>
            
          </Stack>
          </Stack>
           
        </Box>


        <Stack
        pb={100} 
             textAlign={'center'}>
          <Heading mb={6}>
            Ready for every project
          </Heading>
          <Center>
          <Wrap spacing={4} justify='center' maxW={720}>
    <WrapItem>
      <Button colorScheme='gray'>Trust</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='red'>REIT</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='orange'>Venture capital</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow'>Non-Profit</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green'>Limited Partnership</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='teal'>Crowdfunding</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='blue'>+ More</Button>
    </WrapItem>
    
  </Wrap>
        </Center>
        </Stack>

        <Stack  pt={100} pb={200} 
             textAlign={'center'}>
          <Heading>
            All the tools in one platform
          </Heading>
        <Tabs align="center" variant="unstyled" >
 
  <TabList flexWrap={"wrap"}>
    <Tab _selected={{  fontWeight: '900' }} _hover={{  fontWeight: '900' }}>Offerings catalog</Tab>
    <Tab _selected={{  fontWeight: '900' }} _hover={{ fontWeight: '900' }}>Investor dashboard</Tab>
    <Tab _selected={{  fontWeight: '900' }} _hover={{ fontWeight: '900' }}>Entity management</Tab>
    <Tab _selected={{  fontWeight: '900' }} _hover={{  fontWeight: '900' }}>Control center</Tab>

  </TabList>
  <TabPanels px={32}>
    <TabPanel>
      <Image   src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel>
    <TabPanel>
    <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel>
    <TabPanel>
    <Image  
   src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel>
    <TabPanel>
    <Image  
  src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel>

  </TabPanels>
</Tabs>
<Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              _hover={{
                bg: 'green.500',
              }}>
              Watch Demo
            </Button>
            
          </Stack>

          <Stack
         pt={100} pb={200} 
             textAlign={'center'}>
          <Heading mb={6}>
            Works with
          </Heading>
          <Center>
          <Wrap spacing={4} justify='center' maxW={690}>
    <WrapItem>
      <Button colorScheme='gray'>Gnosis</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='red'>Polygon</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='orange'>Ethereum</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow'>Optimism</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green'>Binance smart chain</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='teal'>Tezos</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='blue'>+ More chains</Button>
    </WrapItem>
    
  </Wrap>
        </Center>
        </Stack>
      
</Stack>

      <Container
        as={Stack}
        maxW={'100%'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
          <Box display="flex" alignItems="center" justifyContent="right" >
        <Image h="20px" pointerEvents="none" src={logo}/>
        <Heading fontSize={"xl"} fontWeight='bold' lineHeight={1} letterSpacing={-1} ml={4}>squarefi</Heading> </Box>
        <Text>© 2023 Squarefi Inc. All rights reserved</Text>
        
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
          
 

      </Center>
    </ChakraProvider>
  );
}

export default App;
