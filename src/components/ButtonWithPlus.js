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

function ButtonWithPlus() {
  return (
    <ButtonGroup  isAttached variant='outline' size="lg">
    <Button>More</Button>
    <IconButton aria-label='Add to friends' icon={<AddIcon />} />
  </ButtonGroup>
  );
}

export default ButtonWithPlus;