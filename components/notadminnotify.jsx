import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Notadminnotify = () => {
  return (
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
  );
};

export default Notadminnotify;
