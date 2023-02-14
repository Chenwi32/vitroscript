import Footer from "./footer";
import Navbar from "./navbar";

const LayoutComp = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutComp;
