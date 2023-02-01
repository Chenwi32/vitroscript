import { Container, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container minH={"70vh"} mt={10}>
      <Heading mb={5}>Leave us a message here</Heading>
      <Text mb={2}>Email</Text>
      <Input type={"email"} mb={5} placeholder="Email" />

      <Text mb={2}>What would you want us to do for you?</Text>
      <Textarea placeholder="Message" />
    </Container>
  );
};

export default Contact;
