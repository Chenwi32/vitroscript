import { HamburgerIcon } from "@chakra-ui/icons";
import {
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

const Navbar = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container
      position={"sticky"}
      top={0}
      maxW={"unset"}
      boxShadow="lg"
      p={"0"}
      bg="brand.300"
      
    >
      <Container
        maxW={1200}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        
          <Link href="/">
            <Image
              src="/vitrologo.jpg"
              w={150}
              h={100}
              alt="vitroscript logo"
            />
          </Link>
        

        <Flex
          fontFamily={"Poppins"}
          justifyContent="space-evenly"
          w={"50%"}
          fontWeight={600}
          color="brand.400"
          display={isLargerThan700 ? "flex" : "none"}
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

        {/* Mobile menu */}
        <Menu>
          {
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
              display={isLargerThan700 ? "none" : "block"}
            />
          }
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
          </MenuList>
        </Menu>
      </Container>
    </Container>
  );
};

export default Navbar;
