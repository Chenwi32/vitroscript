import {
  Container,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Image,
  Button,
} from "@chakra-ui/react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ProtectLogin from "../components/protectlogin";
import { auth } from "../firebase";



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

          <form action="">
              <Button
            w={200}
            justifyContent={"center"}
            cursor="pointer"
            borderRadius="3xl"
            bg={"brand.400"}
            _hover={{
              bg: 'brand.400',
              transform: 'translateY(-2px)'
            }}
            onClick={() => {
              signInWthGoogle()
            } }
            mt={10}
            gap={3}
            alignItems={"center"}
            p={"0.5rem"}
          >
            <Image w={7} h={7} alt="google" src="/images/google.png" />
            <Text>Google</Text>
          </Button>
          </form>
        
        </Flex>
      </Container>
    </ProtectLogin>
  );
};

export default Login;
