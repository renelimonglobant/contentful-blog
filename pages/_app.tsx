import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { MaterialTheme } from "../config/MaterialTheme";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/Header/NavBar";
import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Blog</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <ThemeProvider theme={MaterialTheme}>
        <CssBaseline />
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: (theme) => theme.global.lightGray,
          }}
        >
          <Box>
            <Header logo={<Logo />} nav={<NavBar />} />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
