import {Box,
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
  Spacer} from '@chakra-ui/react';
  import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

function WorksWith() {
  return (
   
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
  );
}

export default WorksWith;