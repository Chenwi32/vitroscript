import { Container, Input, Text, Textarea } from "@chakra-ui/react";

const CtaForm = () => {
    return (
      <Container mt={10}>

        <Text mb={2}>Email</Text>
        <Input type={"email"} mb={5} placeholder="Email" required />

        <Text mb={2}>Phone number (optional)</Text>
        <Input type={"number"} mb={5} placeholder="Phone number" />

        <Text mb={2}>What would you want us to do for you?</Text>
        <Textarea placeholder="Message" mb={5}/>
      </Container>
    );
}

export default CtaForm;