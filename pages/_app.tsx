import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../apolloClient";

// Services
import { Storage } from "../services/context";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Storage>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Storage>
  );
}

export default MyApp;
