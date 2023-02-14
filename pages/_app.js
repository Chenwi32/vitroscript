import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { AuthContextProvider } from "../components/authcontexprov";
import LayoutComp from "../components/layout";

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

function MyApp({ Component, pageProps }) {
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
