import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocation,
  faLocationDot,
  faMap,
  faMapLocation,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={"unset"} minH={300} bg="brand.301" color={"brand.400"}>
      <Container maxW={1200} p={10}>
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

            <Flex fontSize={"1.7rem"} gap={7}>
              <a href="https://web.facebook.com/vitroscript1">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/vitroscript/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.tiktok.com/@vitroscript">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.linkedin.com/in/vitroscript/">
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

            <HStack mb={5} fontSize={"1.5rem"}>
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

        <Text>
          &#x00A9; Vitroscript<sup>&#x00AE;</sup> 2022 | All right reserved
        </Text>
      </Container>
    </Container>
  );
};

export default Footer;
