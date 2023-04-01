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
  IconButton
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import DemoModal from './DemoModal';

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mx={4}>
      <Box height={'100vh'} py={200}>
        <VStack textAlign={"center"}>
         
          <Heading  fontSize={{ base: '36px', md: '52px', lg: '72px' }} mb={3}>
            The easiest way <br /> to raise funds
          </Heading>
          <Text as='samp' fontSize={{ base: '18px', md: '22px', lg: '26px' }} maxW="720px">
            An all-in-one platform to start, manage and grow a decentralized crowdinvestment campaign
          </Text>
         
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <a href="https://docs.squarefi.io" target="_blank" rel="noopener noreferrer">
              <Button mt={10} colorScheme="yellow" size="lg">
                Know More
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
      <Stack pt={100} pb={200} textAlign={'center'}>
        <Heading>All the tools in one platform</Heading>
        <Tabs align="center" variant="unstyled">
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
      <DemoModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} /> </Stack>
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
    </Box>
  );
}

export default Home;
