import { Container, Heading } from "@chakra-ui/react";
import ProtectRoute from "./components/protectroute";

const AdminDash = () => {
    return (
        <ProtectRoute>
            <Container minH={'70vh'}>
                <Heading>
                    This is the adin Dashboard
           </Heading>
        </Container>
        </ProtectRoute>
        
    );
}

export default AdminDash;