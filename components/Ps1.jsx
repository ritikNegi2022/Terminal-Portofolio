import { useTheme } from "@/utils/themeProvider";
import { useEffect, useState } from "react";

export const Ps1 = () => {
  const [hostname, setHostname] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.localStorage.hostname);
    }
  }, []);

  return (
    <div>
      <span style={{ color: theme.user }}>guest</span>
      <span style={{ color: theme.symbols }}>@</span>
      <span style={{ color: theme.hostname }}>
        {hostname ? hostname : "anonymous"}:
      </span>
      <span style={{ color: theme.symbols }}>$ ~</span>
    </div>
  );
};

export default Ps1;
