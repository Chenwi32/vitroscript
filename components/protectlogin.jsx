import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./authcontexprov";

const ProtectLogin = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (user.uid) {
      router.push("/admindash");

      toast({
        position: "top",
        title: "Success",
        description:
          "You have been successfully logged in, and you can't access the log In page again accept you log out!!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  });
  return <div>{user ? children : null}</div>;
};

export default ProtectLogin;