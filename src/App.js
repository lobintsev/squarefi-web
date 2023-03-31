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
  VisuallyHidden,
  IconButton
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import 'typeface-inter';
import 'typeface-montserrat';
import logo from './logo.svg';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './styles/fonts.css';



const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
          dark: { bg: 'gray.800' }
      }}},
      fonts: {
        body: "Loos Wide, Montserrat,  sans-serif",
        heading: "Loos Wide, Montserrat,  sans-serif",
        mono: "Menlo, monospace",
      },
      initialColorMode: 'dark',
      useSystemColorMode: false,
  
})




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
          <Heading as="h1" size="2xl" mb={3}>
            The easiest way <br/> to raise funds
          </Heading>
          <Text  >
            An all-in-one platform to start, manage and grow a decentralized crowdinvestment campaign
          </Text>
        
        <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
            <Button mt={10} colorScheme="yellow" size='lg'>
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
      <Button variant="outline" colorScheme='gray'>Trust</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline" colorScheme='red'>REIT</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline"  colorScheme='orange'>Venture capital</Button>
    </WrapItem>
    <WrapItem>
      <Button  variant="outline" colorScheme='yellow'>Non-Profit</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline" colorScheme='green'>Limited Partnership</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline"  colorScheme='teal'>Crowdfunding</Button>
    </WrapItem>
    <WrapItem>
    <ButtonGroup  isAttached variant='outline'>
  <Button>More</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
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
  <TabPanels >
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
    <ButtonGroup  isAttached variant='outline'>
    <Button colorScheme='blue'>More chains</Button>
  <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
          </WrapItem>
    
  </Wrap>
  
        </Center>
        </Stack>

        <Box>
        <IconButton
  colorScheme='teal'
  aria-label='Call Segun'
  size='lg'
  variant={'outline'}
  icon={<AddIcon />}
/>  <Text as="h4" fontSize="xs">Ethereum</Text>   </Box>
       
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
        
      
      </Container>
    </Box>
          
 

      </Center>
    </ChakraProvider>
  );
}

export default App;
