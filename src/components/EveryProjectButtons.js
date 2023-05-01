import { Box,
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
  Spacer } from '@chakra-ui/react';

  import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
  import ButtonWithPlus from './ButtonWithPlus'

function EveryProjectButtons() {
  return (
    <Stack pb={100} pt={100} textAlign={'center'}>
      
        <Center>
          <Wrap spacing={4} justify="center" maxW={1080}>
          <WrapItem>
          <a href="SquareFiForRealEstate.pdf" target="_blank" rel="noopener noreferrer">
      <Button variant="outline" colorScheme='gray' size="lg">Real Estate</Button>
      </a>
    </WrapItem>
    <WrapItem>
      <Button variant="outline" colorScheme='red' size="lg">VC Firm</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline"  colorScheme='orange' size="lg">Hedge Fund</Button>
    </WrapItem>
    <WrapItem>
      <Button  variant="outline" colorScheme='yellow' size="lg">Non-Profit</Button>
    </WrapItem>
    <WrapItem>
      <Button variant="outline" colorScheme='green' size="lg">Limited Partnership</Button>
    </WrapItem>
   <ButtonWithPlus/>
  
          </Wrap>
        </Center>
      </Stack>
  );
}

export default EveryProjectButtons;