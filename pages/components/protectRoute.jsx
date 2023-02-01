import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Notadminnotify from "./notadminnotify";

const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);


  return <>{isAdmin === true ? children : <Notadminnotify />}</>;
};

export default ProtectRoute;
