import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/authcontexprov";

const Home = () => {
  const { user } = useAuth();

  const [userName, setUserName] = useState("");

   useEffect(() => {
     if (user.email !== null) {
       const string = user.email.toString();
       const firstTwo = string.substring(0, 6);
       setUserName(firstTwo);
     }
   }, [user]);

  return (
    <Container
      maxW={1200}
      minH="70vh"
      w={'100%'}
      mt={10}
      
    >
      {user.uid ? (
        <Heading fontFamily={'Andika'}>Hey {userName.toUpperCase()}, welcome back!!! </Heading>
      ) : (
        <Heading>Thank you for visiting</Heading>
      )}
    </Container>
  );
};

export default Home;
