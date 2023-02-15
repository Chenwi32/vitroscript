import { Box, Container, Heading, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const Inbox = () => {

    const messagecollection = collection(db, "mymessages");

    let loading;

    const [myMessages, setMyMessages] = useState([]);

    const getMessages = async () => {
      // Query all Id cards
      const messageQuery = query(messagecollection);

      // get id cards
      const querySnapshot = await getDocs(messageQuery);

      // Map through the ids and add them to a new array
      const results = [];

      querySnapshot.forEach((snapshot) => {
        results.push(snapshot.data());
      });

      // assign the new array to the foundIds
      setMyMessages(results);
    };

  useEffect(() => {
    getMessages()
  }, [])

  loading = myMessages.length === 0


    return (
      <Container minH={"70vh"} maxW={1200} p={10}>
       

        <Heading fontFamily={"Andika"} mb={10}>New messages</Heading>
        {loading ? (
          <>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </>
        ) : (
          myMessages.map((message) => (
            <Box
              key={message.name}
              border={"1px"}
              p={8}
              boxShadow={"lg"}
              borderRadius={"lg"}
              fontWeight={600}
              mb={5}
            >
              <Text>Message from:</Text>
              <Text mb={5}>{message.name}</Text>

              <Text>Email:</Text>
              <Text mb={5}>{message.email}</Text>

              <Text mb={2}>Message:</Text>

              <Text border={"1px solid blue"} p={3}>
                {message.message}
              </Text>
            </Box>
          ))
        )}
      </Container>
    );
}

export default Inbox;