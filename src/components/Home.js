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
import EveryProjectButtons from './EveryProjectButtons';
import ProductSlider from './ProductSlider';
import WorksWith from './WorksWith';

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   
    <Box mx={4} >
       
      <Box h="80vh" mt="20vh"   >
      
        <VStack textAlign={"center"}>
         
          <Heading  fontSize={{ base: '36px', md: '52px', lg: '72px' }} mb={3}>
            The easiest way <br /> to invest in Real Estate
          </Heading>
          <Text fontWeight="500" fontSize={{ base: '18px', md: '22px', lg: '26px' }} maxW="720px">
            Become a landlord and own a profitae commercial real estate for as low as 100$
          </Text>
     
        </VStack>
        <EveryProjectButtons/>
        <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <a href="https://share-eu1.hsforms.com/1mL6YTNwxQiev-GbQUG9BTQg4dnb" target="_blank" rel="noopener noreferrer">
          <Button colorScheme='purple'size='lg' >
            Get Started
          </Button>
        </a>
      </Stack>
      </Box>
     

    


        
    </Box>
  );
}

export default Home;
