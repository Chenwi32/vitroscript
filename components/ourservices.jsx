import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Ourservices = () => {
  return (
    <Container maxW={900} bg="brand.500" color={"brand.400"} p={5}>
      <Heading fontFamily={"Andika"} color="brand.200" mb={5}>
        What we do
      </Heading>

      <UnorderedList fontFamily={"Poppins"} listStyleType={"none"}>
        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Design community-based projects
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Dissertation: Certificate to Masters
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Design project proposals
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Draw constitutions for Associations
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Design company policies (HR-Doc)
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Write business proposals
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Draw business plans
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Design professional resumes/CVs
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Design company/professional docs
        </ListItem>

        <ListItem mb={3}>
          <ArrowRightIcon mr={5} />
          Copywriting, Grants writing, etc.
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default Ourservices;
