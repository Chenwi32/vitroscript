import { Container, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import CtaForm from "./components/ctaForm";

const Contact = () => {
  return (
    <Container minH={"70vh"} mt={10}>
      <Heading mb={5} fontFamily='Andika' color={'brand.200'}>Leave us a message here</Heading>

     <CtaForm/>
    </Container>
  );
};

export default Contact;
