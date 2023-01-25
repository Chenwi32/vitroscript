import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "./components/layout";

const theme = extendTheme({
  colors: {
    brand: {
      100: " #F8E60A",
      200: "#EE8D21",
      300: "#000304",
      400: "#fff",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ChakraProvider>
    
  );
}

export default MyApp;
