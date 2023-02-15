import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "./authcontexprov";

const Adminnavbar = () => {
  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

   const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      maxW={isLargerThan700 ? 250 : 1200}
      p={3}
      minH={isLargerThan700 ? "50vh" : "fit-content"}
      bg={"brand.500"}
      color="brand.400"
    >
      <Flex
        gap={5 }
        justifyContent="space-between"
        flexDirection={isLargerThan700 ? "column" : "row"}
        w={"100%"}
      >
        <Button
          bg={"brand.100"}
          color="brand.300"
          position={"unset"}
          _hover={{
            bg: "brand.200",
          }}
          onClick={onOpen}
        >
          Log Out
        </Button>

        <Flex gap={5} flexDirection={isLargerThan700 ? "column" : 'row'} w={"100%"}>
          <Link href={"/dashboard/createpost"}>
            <Button
              bg={"brand.400"}
              color="brand.300"
              position={"unset"}
              _hover={{
                bg: "brand.200",
              }}
              display="flex"
              justifyContent={"space-between"}
              w={isLargerThan700 ? "100%" : 150}
            >
              Create Post
              {isLargerThan700 ? <ChevronRightIcon /> : <ChevronDownIcon />}
            </Button>
          </Link>
          <Link href={"/dashboard/inbox"}>
            <Button
              bg={"brand.400"}
              color="brand.300"
              position={"unset"}
              _hover={{
                bg: "brand.200",
              }}
              display="flex"
              justifyContent={"space-between"}
              w={isLargerThan700 ? "100%" : 150}
            >
              Messages
              {isLargerThan700 ? <ChevronRightIcon /> : <ChevronDownIcon />}
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            color={"brand.400"}
            _hover={{
              bg: "brand.200",
            }}
          />
          <ModalBody
            display={"flex"}
            justifyContent="center"
            minH={"30vh"}
            alignItems="center"
          >
            <Text>Are you sure you want to Log out?</Text>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent="space-between">
            <Button
              bg={"brand.200"}
              _hover={{
                bg: "brand.100",
              }}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onClose();
                handleLogout();
              }}
              _hover={{
                bg: "brand.200",
              }}
              bg={"brand.100"}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Adminnavbar;
