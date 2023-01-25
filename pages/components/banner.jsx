import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Banner = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container
      maxW={"unset"}
      minH={"70vh"}
      w="100%"
      backgroundImage={"/images/vitros.jpg"}
      backgroundColor="brand.301"
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
      backgroundSize="cover"
      backgroundBlendMode='soft-light'
      display={'flex'}
      alignItems="center"
      
    >
      <Flex
        maxW={1200}
        m={'auto'}
        flexDirection={isLargerThan700 ? "row" : "column"}
       p={10}
      >
        <Flex
          flexDirection={"column"}
          w={isLargerThan700 ? "50%" : "100%"}
          p='1.5rem '
        >
          <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
            Have an investor-ready Business plan in two days
          </Heading>
          <Text mb={5} color="brand.400">
            We are commited to accuracy and speed under tight deadlines
          </Text>

          <Button bg={"brand.100"} w={"50%"} zIndex="-0" color="brand.300">
            Get in touch
          </Button>
        </Flex>

        <Box display={isLargerThan700 ? "block" : "none"}>
          <Image borderRadius={'xl'} boxShadow={"2xl"} src="/images/vitros.jpg" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Banner;
