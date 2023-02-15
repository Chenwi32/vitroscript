import { Container } from "@chakra-ui/react";
import Adminnavbar from "./adminnavbar";
import Footer from "./footer";
import Navbar from "./navbar";

 const DashboardLayout = ({
  children, // will be a page or nested layout
}) =>{
  return (
    <>
      <Navbar/>
      <Adminnavbar />

      {children}
      <Footer/>
    </>
  );
}
export default DashboardLayout