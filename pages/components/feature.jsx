import { Box, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

const Feature = () => {

    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={1200} minH={"40vh"} pb={20} >
      <Flex flexDirection={isLargerThan700? 'row' : 'column'} alignItems={"center"} gap={10} justifyContent='space-between'>
        <Image w={500} borderRadius="2xl" src="/images/vitro.jpeg" />
        <Box w={"50%"}>
          <Heading
            mb={5}
            fontFamily={"Andika"}
            fontSize="1.7rem"
            color={"brand.400"}
          >
            A great idea without a good plan won't go as far.
          </Heading>

          <Text color={"brand.200"} fontSize="1.3rem" >
            Let us craft your great idea into an executable plan. We create great business plans, Project proposals
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Feature;
