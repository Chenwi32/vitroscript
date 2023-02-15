import { Container, Heading } from "@chakra-ui/react";
import { useAuth } from "../../components/authcontexprov";

const Home = () => {
  const { user } = useAuth();

  return (
      <Container maxW={1200} minH="70vh" mt={10} display='flex' justifyContent={'center'} alignItems="center" >
          
              {user.uid ? (
              <Heading>Hey { user.email}, welcome back!!! </Heading>
      ) : (
        <Heading>Thank you for visiting</Heading>
      )}
        
      
    </Container>
  );
};

export default Home;
