import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContextProvider } from "../components/authcontexprov";
import LayoutComp from "../components/layout";
import DashboardLayout from "../components/dashblayout";

config.autoAddCss = false;

const theme = extendTheme({
  colors: {
    brand: {
      100: " #F8E60A",
      200: "#EE8D21",
      300: "#000304",
      301: "#000304d8",
      400: "#fff",
      500: "#0a0a00",
    },
  },
});

function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/dashboard/')) {
    return (
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
      </DashboardLayout>
      </ChakraProvider>
      </AuthContextProvider>
      
      
    )
  } 
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <LayoutComp>
          
          <Component {...pageProps} />
        </LayoutComp>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
