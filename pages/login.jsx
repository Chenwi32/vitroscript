import {
  Container,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Image,
  Button,
  Input,
  Icon,
} from "@chakra-ui/react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../components/authcontexprov";
import ProtectLogin from "../components/protectlogin";
import { auth } from "../firebase";

const Login = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [isVisible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const methods = useForm({ mode: "onBlur" });

   const {
     register,
     handleSubmit,
     formState: { errors },
   } = methods;

  const { logIn } = useAuth();

  const provider = new GoogleAuthProvider();

  const signInWthGoogle = () => {
    signInWithRedirect(auth, provider)
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

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("/admindash");
      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
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

          <FormProvider {...methods}>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
                <Flex flexDirection={"column"} alignItems={"flex-start"} mb={5}>
                  <Text color="brand.400">Email:</Text>
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    bg="brand.400"
                    placeholder="example@gmail.com"
                    className={`main_input `}
                    {...register("email", {
                      required: "A valid email is required",
                    })}
                    type="email"
                    value={email}
                    required
                  />

                  {errors.email && (
                    <Text color={"brand.400"}>
                      <small>{errors.email.message}</small>
                    </Text>
                  )}
                </Flex>

                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  mb={10}
                >
                  <Text color="brand.400">Password:</Text>

                  <Flex gap={0} p={0} h="fit-content">
                    <Input
                      {...register("password", {
                        required: "Password is required",
                      })}
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
                        <FontAwesomeIcon
                          icon={isVisible ? faEyeSlash : faEye}
                        />
                      </Icon>
                    </Flex>
                  </Flex>

                  {errors.password && (
                    <Text color={"brand.400"}>
                      {" "}
                      <small>{errors.password.message}</small>{" "}
                    </Text>
                  )}
                </Flex>

                <Button
                  bg="brand.100"
                  _hover={{
                    bg: "brand.200",
                  }}
                  p={5}
                  mb={10}
                  w={"100%"}
                  type="submit"
                >
                  Log In
                </Button>
                <Heading color={"brand.200"} fontSize={"1.5rem"} mb={5}>
                  OR
                </Heading>

                <Button
                  w={"100%"}
                  justifyContent={"center"}
                  cursor="pointer"
                  borderRadius="3xl"
                  bg={"brand.400"}
                  _hover={{
                    bg: "brand.400",
                    transform: "translateY(-2px)",
                  }}
                  onClick={() => {
                    signInWthGoogle();
                  }}
                  mt={10}
                  gap={3}
                  alignItems={"center"}
                  p={"0.5rem"}
                >
                  <Image w={7} h={7} alt="google" src="/images/google.png" />
                  <Text>Google</Text>
                </Button>
              </Flex>
            </form>
          </FormProvider>
        </Flex>
      </Container>
    </ProtectLogin>
  );
};

export default Login;
