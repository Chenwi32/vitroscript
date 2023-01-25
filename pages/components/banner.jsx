import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Container>
      <Flex>
        <Flex flexDirection={"column"}>
          <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
            Have an investor-ready Business plan in two days
          </Heading>
          <Text mb={5} color="brand.300">
            We are commited to accuracy and speed under tight deadlines
          </Text>
          <Button bg={"brand.100"} w='50%' fontWeight={800} color="brand.300" zIndex={-1}>
            Get in touch
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Banner;
