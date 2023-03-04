import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ShellProvider } from "@/utils/shellProvider";
import { ThemeProvider } from "@/utils/themeProvider";
import { useEffect, useRef } from "react";
export default function App({ Component, pageProps }) {
  const inputRef = useRef(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    localStorage.setItem("visitedAt", new Date().toString());
  }, []);
  return (
    <ThemeProvider>
      <ShellProvider>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>

        <Layout>
          <Component {...pageProps} inputRef={inputRef} />
        </Layout>
      </ShellProvider>
    </ThemeProvider>
  );
}
