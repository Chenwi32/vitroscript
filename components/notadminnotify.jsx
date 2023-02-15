import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, ChakraBaseProvider, Container, extendTheme, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";


const theme = extendTheme({
  colors: {
    brand: {
      100: " #F8E60A",
      200: "#EE8D21",
      300: "#000304",
      301: "#000304d8",
      400: "#fff",
      500: "#0a0a00",
    },
  },
});

const Notadminnotify = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Container minH={"70vh"}>
        <Heading mb={5}>Sorry You are not allowed to access this page.</Heading>

        <Text>
          If you are an admin, you can log in{" "}
          <Link href={"/login"}>
            <Button
              color={"brand.100"}
              p={0}
              bg="unset"
              _hover={{
                bg: "unset",
                color: "brand.200",
              }}
            >
              here <ArrowForwardIcon />
            </Button>
          </Link>
        </Text>
      </Container>
    </ChakraBaseProvider>
  );
};

export default Notadminnotify;
