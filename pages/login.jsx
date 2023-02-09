import {
  Container,
  Icon,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Button,
  Input,
} from "@chakra-ui/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Login = () => {

    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
    const [email, setEmail] = useState();
    const [password, setPassWord] = useState();
    const [isVisible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    return (
      <Container
        maxW={"unset"}
        minH="70vh"
        h="fit-content"
        w="100%"
        bg={"brand.500"}
        mb={10}
        borderBottomLeftRadius={isLargerThan700 ? "10rem" : "5rem"}
        p={5}
      >
        <Flex
          m="auto"
          flexDirection={"column"}
          maxW={700}
          p={5}
          alignItems="center"
          textAlign={"left"}
        >
          <Heading color={"brand.200"} fontSize={"1.5rem"} mb={5}>
            Log In
          </Heading>


          <form action="">
            <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                <Text color="brand.400">Email:</Text>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  bg="brand.400"
                  placeholder="Email"
                  className={`main_input `}
                  type="email"
                  value={email}
                  required
                />
              </Flex>

              <Flex flexDirection={"column"} alignItems={"flex-start"} mb={10}>
                <Text color="brand.400">Password:</Text>

                <Flex gap={0} p={0} h="fit-content">
                  <Input
                    type={isVisible === true ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassWord(e.target.value);
                    }}
                    bg="brand.400"
                    placeholder="Password"
                    className={`main_input `}
                    required
                  />

                  <Flex
                    p={"0.2rem 0.5rem"}
                    alignItems={"center"}
                    ml={"-2rem"}
                    borderTopRightRadius={5}
                    borderBottomRightRadius={5}
                  >
                    <Icon
                      fontSize={"1rem"}
                      onClick={() => {
                        if (isVisible) {
                          setVisible(false);
                        } else {
                          setVisible(true);
                        }
                      }}
                      zIndex={1}
                    >
                      <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                    </Icon>
                  </Flex>
                </Flex>
              </Flex>

              <Button
                bg="brand.100"
                _hover={{
                  bg: "brand.200",
                }}
                p={5}
                mb={10}
                w={"100%"}
              >
                Log In
              </Button>
            </Flex>
          </form>
        </Flex>
      </Container>
    );
}

export default Login;