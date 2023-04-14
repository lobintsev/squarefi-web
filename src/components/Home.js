// src/components/Home.js
import React from 'react';
import {
  Box,
  Heading,
  Stack,
  VStack,
  Button,
  Text,
  Center,
  Wrap,
  WrapItem,
  Image,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  ButtonGroup,
  IconButton,
  Flex,
  Spacer
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import DemoModal from './DemoModal';

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mx={4}>
      <Box height={'100vh'} py={100}>
        <VStack textAlign={"center"}>
         
          <Heading  fontSize={{ base: '36px', md: '52px', lg: '72px' }} mb={3}>
            The easiest way <br /> to raise funds
          </Heading>
          <Text fontWeight="500" fontSize={{ base: '18px', md: '22px', lg: '26px' }} maxW="720px">
            An all-in-one platform to start, manage and grow a decentralized fundrising campaign
          </Text>
         
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
              <Button mt={{ base: 10, md: 12, lg: 14 }} py={{ base: 4, md: 5, lg: 6 }} px={{ base: 8, md: 10, lg: 12 }} borderRadius="xl" colorScheme="yellow" h={"full"}>
                Learn More
              </Button>
            </a>
          </Stack>
        </VStack>
      </Box>
      <Stack pb={100} textAlign={'center'}>
        <Heading mb={6}>Ready for every project</Heading>
        <Center>
          <Wrap spacing={4} justify="center" maxW={720}>
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
      <Stack pt={100} pb={100} textAlign={'center'}>
        <Heading>All the tools in one platform</Heading>
        <Tabs align="center" variant="unstyled">
        <TabList flexWrap={"wrap"}>
    <Tab _selected={{  color: "yellow" }} _hover={{ color: "yellow" }}>Offerings catalog</Tab>
    <Tab _selected={{  color: "yellow" }} _hover={{ color: "yellow" }}>Investor dashboard</Tab>
    <Tab _selected={{  color: "yellow" }} _hover={{ color: "yellow" }}>Entity management</Tab>
    <Tab _selected={{  color: "yellow" }} _hover={{ color: "yellow" }}>Control center</Tab>

  </TabList>
  <TabPanels  maxW={{ base: '560px', md: '720px', lg: '1000px' }}>
    <TabPanel  filter='auto' blur='2px'>
      <Image   src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel >
    <TabPanel filter='grayscale(80%)'>
    <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
    </TabPanel>
    <TabPanel filter='invert(75%)'>
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

<a href="https://share-eu1.hsforms.com/1mL6YTNwxQiev-GbQUG9BTQg4dnb" target="_blank" rel="noopener noreferrer">
              <Button colorScheme='purple' >
                Request Demo
              </Button>
            </a>

       </Stack>
      </Stack>
    

      <Stack pt={100} pb={200} textAlign={'center'}>
        <Heading mb={6}>Works with</Heading>
        <Center>
          <Wrap spacing={4} justify="center" maxW={690}>
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
  <IconButton aria-label='Add to friends' icon={<AddIcon />} colorScheme='blue'/>
</ButtonGroup>
          </WrapItem>
    
          </Wrap>
        </Center>
      </Stack>

      <VStack pt={100} pb={200} textAlign={'center'}>
        <Heading mb={6}>Help at every step</Heading>
        <Wrap spacing={4} justify="center" align='center' maxW={(500, 720, 1056)} fontSize={{ base: '18px', md: '22px', lg: '26px' }}>
          
        <WrapItem>
        <Text>Entity formation</Text>
        </WrapItem>
        <WrapItem><AddIcon /> </WrapItem>
        <WrapItem>
        <Text>Fiat & Crypto accounts</Text>
        </WrapItem>
        <WrapItem><AddIcon /></WrapItem>
        <WrapItem>
        <Text>Legal documents</Text>
        </WrapItem>
        <WrapItem><AddIcon /></WrapItem>
        <WrapItem>
        <Text>Investor onboarding</Text>
        </WrapItem>
        <WrapItem><AddIcon /></WrapItem>
        <WrapItem>
        <Text>Regulatory filings</Text>
        </WrapItem>
        <WrapItem><AddIcon /></WrapItem>
        <WrapItem>
        <Text>Capital distribution</Text>
        </WrapItem>
      
        </Wrap>
        </VStack>
        
    </Box>
  );
}

export default Home;
