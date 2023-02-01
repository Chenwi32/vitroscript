import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
 
  faFacebookF,
  faInstagram,

  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {

  faLocationDot,
 
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={"unset"} minH={300} bg="brand.301" color={"brand.400"}>
      <Container maxW={1200} p={isLargerThan700 ? 10 : 5}>
        <Flex
          gap={isLargerThan700 ? 20 : 0}
          flexDirection={isLargerThan700 ? "row" : "column"}
        >
          <Box mb={10}>
            <Heading
              mb={5}
              fontSize={"1.5rem"}
              fontFamily="Andika"
              color={"brand.200"}
            >
              Connect with us.
            </Heading>

            <Flex
              fontSize={isLargerThan700 ? "1.7rem" : "1.3rem"}
              gap={isLargerThan700 ? 7 : 4}
            >
              <a
                href="https://web.facebook.com/vitroscript1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/vitroscript/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.tiktok.com/@vitroscript"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                href="https://www.linkedin.com/in/vitroscript/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </Flex>
          </Box>

          <Box mb={10}>
            <Heading
              mb={5}
              fontSize={"1.5rem"}
              fontFamily="Andika"
              color={"brand.200"}
            >
              About us
            </Heading>

            <HStack mb={2} fontSize={"1.2rem"}>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <Heading
                fontSize={"1.2rem"}
                fontFamily="Andika"
                color={"brand.400"}
              >
                Location
              </Heading>
            </HStack>

            <Text fontFamily={"Poppins"} ml={5}>
              Maison Rose Damas, Yaoundé, Cameroon
            </Text>
          </Box>
        </Flex>

        <Box h={"1px"} bg="brand.400" mb={10}></Box>

        <Flex justifyContent={"space-between"} alignItems="center">
          <Text fontFamily={"Poppins"} fontSize="0.8rem">
            &#x00A9; Vitroscript<sup>&#x00AE;</sup> 2022 | All right reserved
          </Text>
          <Image src="/vitrologo.jpg" w={10} h={10} alt="logo" />
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;
