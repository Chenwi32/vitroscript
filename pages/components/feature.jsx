import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useMediaQuery,

} from "@chakra-ui/react";

const Feature = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container maxW={1200} minH={"40vh"} pb={isLargerThan800 ? 20 : 10}>
      <Flex
        flexDirection={isLargerThan800 ? "row" : "column"}
        alignItems={"center"}
        gap={10}
        justifyContent="space-between"
      >
        <Image
          w={500}
          borderRadius="2xl"
          src="/images/vitro.jpeg"
          alt="vitroscript team"
        />
        <Box w={isLargerThan800 ? "50%" : "100%"}>
          <Heading
            mb={5}
            fontFamily={"Andika"}
            fontSize="1.7rem"
            color={"brand.300"}
          >
            A great idea without a good plan will not go as far.
          </Heading>

          <Text
            fontFamily={"Poppins"}
            mb={10}
            color={"brand.200"}
            fontSize="1.3rem"
          >
            Let us craft your great idea into an executable plan. We create
            great business plans, Project proposals
          </Text>

          <HStack
            p={3}
            bg="brand.400"
            boxShadow={"lg"}
            justifyContent="space-between"
            alignItems={"center"}
            borderRadius="lg"
            border={"1px"}
            w="70%"
          >
            <Text>Learn more</Text>

            <Button
              position={"unset"}
              bg={"brand.100"}
              color="brand.300"
              _hover={{
                bg: "brand.200",
              }}
            >
              <ArrowForwardIcon />
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Feature;
