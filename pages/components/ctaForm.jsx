import { Button, Container, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const CtaForm = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  return (
    <Container mt={10} mb={10} p={0}>
      <Text mb={2}>Email</Text>
      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={"email"}
        mb={5}
        placeholder="example@gmail.com"
        required
      />

      <Text mb={2}>Phone number (optional)</Text>
      <Input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        type="tel"
        mb={5}
        placeholder="+237********"
      />

      <Text mb={2}>What would you want us to do for you?</Text>
      <Textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder="Message"
        mb={5}
      />

      <Button
        w={"100%"}
        bg={"brand.100"}
        color="brand.300"
        position={"unset"}
        _hover={{
          bg: "brand.200",
        }}
      >
        Send
      </Button>
    </Container>
  );
};

export default CtaForm;
