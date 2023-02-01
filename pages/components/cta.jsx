import { Container, Heading } from "@chakra-ui/react";
import CtaForm from "./ctaForm";

const Cta = () => {
    return <Container>
        <Heading fontFamily={'Andika'} fontSize='1.5rem'>
          We would like to hear from you.  
        </Heading>
        
        <CtaForm/>
  </Container>;
};

export default Cta;
