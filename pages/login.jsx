import {
  Container,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import ProtectLogin from "./components/protectlogin";

const Login = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const provider = new GoogleAuthProvider();

  const signInWthGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(` ${errorCode}, ${errorMessage}, ${email}, ${credential} `);
      });
  };

  return (
    <ProtectLogin>
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

          <Flex
            w={"100%"}
            justifyContent={"center"}
            cursor="pointer"
            borderRadius="lg"
            bg={"brand.400"}
            onClick={signInWthGoogle}
            mt={10}
            gap={3}
            alignItems={"center"}
            p={"0.5rem"}
          >
            <Image w={7} h={7} alt="google" src="/images/google.png" />
            <Text>Google</Text>
          </Flex>
        </Flex>
      </Container>
    </ProtectLogin>
  );
};

export default Login;
