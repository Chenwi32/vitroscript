import { Container, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container
      position={"sticky"}
      top={0}
      maxW={"unset"}
      boxShadow="lg"
          p={"0.5rem 0"}
          mb={10}
    >
      <Container
        maxW={1200}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Link href="/">
          <Image src="/vitrologo.jpg" w={150} h={100} />
        </Link>

        <Flex
          fontFamily={"Poppins"}
          justifyContent="space-evenly"
          w={"50%"}
          fontWeight={600}
        >
          <Link href={"/services"}>
            <Text>Services</Text>
          </Link>
          <Link href={"/pricing"}>
            <Text>Pricing</Text>
          </Link>
          <Link href={"/templates"}>
            <Text>Templates</Text>
          </Link>
          <Link href={"/blog"}>
            <Text>Blog</Text>
          </Link>
          <Link href={"/about"}>
            <Text>About</Text>
          </Link>
          <Link href={"/faq"}>
            <Text>FAQ</Text>
          </Link>
        </Flex>
      </Container>
    </Container>
  );
};

export default Navbar;
