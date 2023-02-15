import { Button, Container, Input, Text, Textarea, useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const CtaForm = () => {

  const toast = useToast()

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();


 const [buttonValue, setButtonValue] = useState('Send')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const timestamp = Date.now().toString()

    const myMessages = doc(db, `mymessages/${timestamp}`)

    const data = {
      name,
      email,
      phone,
      message,
      timestamp
    }

        if ( email !== "" || name !== "" || message !== "") {
      setButtonValue("Sending...");
      try {
        await setDoc(myMessages, data).then(() => {
          setButtonValue("Send");
        });

        toast({
          position: "top",
          title: "Success",
          description:
            "Sent successfully. Thank you very much. We will get to you within 24 hours",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        
      } catch (error) {
        console.log(error);
      }


    setMessage("");
    setName("");
    setEmail("");
    setPhone("");
    } else {
      
          setButtonValue('Send')

           toast({
             position: "top",
             title: "Error",
             description:
               "Some field are still empty. Please make sure you fill in all the information required. Thank you.",
             status: "error",
             duration: 9000,
             isClosable: true,
           });
      
          
    }
  }

  return (
    <Container mt={10} mb={10} p={0}>
      <Text mb={2}>Name:</Text>
      
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type={"text"}
        mb={5}
        placeholder="John Doe"
        required
      />
      <Text mb={2}>Email:</Text>
      
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

      <Text mb={2}>Phone number (optional):</Text>
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
        onClick={(e) => {
          handleSubmit(e);

          setButtonValue("Sending...");
        }}
      >
        {buttonValue}
      </Button>
    </Container>
  );
};

export default CtaForm;






