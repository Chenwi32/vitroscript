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
      backgroundBlendMode="soft-light"
      display={"flex"}
      alignItems="center"
      mb={20}
      p={0}
    >
      <Flex
        maxW={1200}
        m={"auto"}
        flexDirection={isLargerThan700 ? "row" : "column"}
        p={isLargerThan700 ? 10 : 2}
      >
        <Flex
          flexDirection={"column"}
          w={isLargerThan700 ? "50%" : "100%"}
          p={isLargerThan700 ? "1.5rem " : "0.5rem"}
          textAlign={isLargerThan700 ? "initial" : "center"}
          alignItems={isLargerThan700 ? "initial" : "center"}
        >
          <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
            Have an investor-ready Business plan in two days
          </Heading>
          <Text fontFamily={"Poppins"} mb={5} color="brand.400">
            We commit to accuracy and speed under tight deadlines
          </Text>

          <Button bg={"brand.100"} w={"50%"} color="brand.300" position={'unset'}>
            Get in touch
          </Button>
        </Flex>

        <Box display={isLargerThan700 ? "block" : "none"}>
          <Image
            borderRadius={"xl"}
            boxShadow={"2xl"}
            src="/images/vitros.jpg"
            alt="vitroscript team"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Banner;
