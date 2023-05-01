import { Stack, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Image, Button } from '@chakra-ui/react';

function ProductSlider() {
  return (
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
            <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
          </TabPanel >
          <TabPanel filter='grayscale(80%)'>
            <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
          </TabPanel>
          <TabPanel filter='invert(75%)'>
            <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
          </TabPanel>
          <TabPanel>
            <Image src="https://horizon-ui.com/static/media/main-hero-image.c18f68e8fec5f9091e4c.png"/> 
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
  );
}

export default ProductSlider;