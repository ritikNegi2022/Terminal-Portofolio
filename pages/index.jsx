import History from "@/components/History";
import Head from "next/head";
import Input from "@/components/Input";
import { useShell } from "@/utils/shellProvider";
import { useTheme } from "@/utils/themeProvider";
import { useEffect, useRef } from "react";
import config from "../config.json";

const IndexPage = ({ inputRef }) => {
  const { history } = useShell();
  const { theme } = useTheme();
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);
  return (
    <>
      <Head>
        <title>BL4NK | Home</title>
      </Head>

      <div
        ref={containerRef}
        className="indexContainer"
        style={{
          borderColor: theme.border,
          padding: config.border ? 16 : 8,
          borderWidth: config.border ? 2 : 0,
        }}
      >
        <div className="displayContainer">
          <History history={history} />

          <Input inputRef={inputRef} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
