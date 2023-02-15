import { Container, Heading } from "@chakra-ui/react";

const Inbox = () => {
    return (
        <Container minH={'70vh'} maxW={1200} p={10}>
            <Heading fontFamily={'Andika'}>
                Your messages will be displayed here
            </Heading>
        </Container>
    );
}

export default Inbox;