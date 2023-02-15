import { Button, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Adminnavbar = () => {
  return (
    <Container maxW={1200} p={3}>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Flex gap={5}>
          <Link href={"/dashboard/createpost"}>Create Post</Link>
          <Link href={"/dashboard/inbox"}>Messages</Link>
        </Flex>
        <Button
          bg={"brand.500"}
          color="brand.400"
          position={"unset"}
          _hover={{
            bg: "brand.200",
          }}
        >
          Log Out
        </Button>
      </Flex>
    </Container>
  );
};

export default Adminnavbar;
