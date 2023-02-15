import { Container, Flex } from "@chakra-ui/react";
import Adminnavbar from "./adminnavbar";
import Footer from "./footer";
import Navbar from "./navbar";

 const DashboardLayout = ({
  children, // will be a page or nested layout
}) =>{
  return (
    <>
      <Navbar />
      <Flex>
         <Adminnavbar />

      {children}
      </Flex>
     
      <Footer/>
    </>
  );
}
export default DashboardLayout