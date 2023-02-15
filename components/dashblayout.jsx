import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Adminnavbar from "./adminnavbar";
import Footer from "./footer";
import Navbar from "./navbar";

 const DashboardLayout = ({
  children, // will be a page or nested layout
 }) => {
   
    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <>
      <Navbar />
       <Flex flexDirection={isLargerThan700 ? 'row' : 'column'}> 
         <Adminnavbar />

      {children}
      </Flex>
     
      <Footer/>
    </>
  );
}
export default DashboardLayout