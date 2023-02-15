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
import Link from "next/link";

const Banner = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

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
        flexDirection={isLargerThan800 ? "row" : "column"}
        p={isLargerThan800 ? 10 : 2}
      >
        <Flex
          flexDirection={"column"}
          w={isLargerThan800 ? "50%" : "100%"}
          p={isLargerThan800 ? "1.5rem " : "0.5rem"}
          textAlign={isLargerThan800 ? "initial" : "center"}
          alignItems={isLargerThan800 ? "initial" : "center"}
        >
          <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
            Have an investor-ready Business plan in two days
          </Heading>
          <Text fontFamily={"Poppins"} mb={5} color="brand.400">
            We commit to accuracy and speed under tight deadlines. Reach us as soon as posible.
          </Text>

          <a
                href="https://wa.me/+237653955513"
                target="_blank"
                rel="noreferrer"
              >
            <Button
              bg={"brand.100"}
              w={isLargerThan800 ? "50%" : "fit-content"}
              color="brand.300"
              position={"unset"}
              _hover={{
                bg: "brand.200",
              }}
            >
              Get in touch
            </Button>
          </a>
        </Flex>

        <Box display={isLargerThan800 ? "block" : "none"}>
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
