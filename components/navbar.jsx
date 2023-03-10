import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "./authcontexprov";

import { useRouter } from "next/router";

const Navbar = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Container
      position={"sticky"}
      top={0}
      maxW={"unset"}
      boxShadow="lg"
      p={"0"}
      bg="brand.300"
      zIndex={1}
    >
      <Container
        maxW={1200}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Link href="/">
          <Image src="/vitrologo.jpg" w={150} h={100} alt="vitroscript logo" />
        </Link>

        <Flex
          fontFamily={"Poppins"}
          justifyContent="space-between"
          alignItems={"center"}
          color="brand.400"
          display={isLargerThan800 ? "flex" : "none"}
          gap={5}
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

          <Link href={"/contact"}>
            <Button
              bg={"brand.100"}
              color="brand.300"
              position={"unset"}
              _hover={{
                bg: "brand.200",
              }}
            >
              Contact
            </Button>
          </Link>
        </Flex>

        {/* Mobile menu */}
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            bg="inherit"
            fontSize={"1.8rem"}
            color="brand.400"
            _hover={{
              bg: "initial",
            }}
            _active={{
              bg: "initial",
            }}
            display={isLargerThan800 ? "none" : "block"}
          />

          <MenuList w={"98vw"} bg="brand.400" boxShadow="lg">
            <Link href={"/services"}>
              <MenuItem>Services</MenuItem>
            </Link>

            <Link href={"/pricing"}>
              <MenuItem>Pricing</MenuItem>
            </Link>

            <Link href={"/templates"}>
              <MenuItem>Templates</MenuItem>
            </Link>

            <Link href={"/blog"}>
              <MenuItem>Blog</MenuItem>
            </Link>

            <Link href={"/about"}>
              <MenuItem>About</MenuItem>
            </Link>

            <Link href={"/faq"}>
              <MenuItem>FAQ</MenuItem>
            </Link>

            <Link href={"/contact"}>
              <MenuItem>Contact</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Container>
    </Container>
  );
};

export default Navbar;
