import { createContext, useContext, useEffect, useState } from "react";
import * as bin from "./bin";
import { useTheme } from "./themeProvider";

const ShellContext = createContext(null);

export const useShell = () => useContext(ShellContext);

export const ShellProvider = ({ children }) => {
  const [init, setInit] = useState(true);
  const [history, _setHistory] = useState([]);
  const [command, _setCommand] = useState("");
  const [lastCommandIndex, _setLastCommandIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!init) {
      execute();
    }
  }, [command, init]);

  const setHistory = (output) => {
    _setHistory([
      ...history,
      {
        id: history.length,
        date: new Date(),
        command: command.split(" ").slice(1).join(" "),
        output,
      },
    ]);
  };
  const setCommand = (command) => {
    _setCommand([Date.now(), command].join(" "));

    setInit(false);
  };
  const clearHistory = () => {
    _setHistory([]);
  };
  const setLastCommandIndex = (index) => {
    _setLastCommandIndex(index);
  };

  const execute = async () => {
    const [cmd, ...args] = command.split(" ").slice(1);

    switch (cmd) {
      case "theme":
        const output = await bin.theme(args, setTheme);

        setHistory(output);
        break;
      case "clear":
        clearHistory();
        break;
      case "":
        setHistory("");
        break;
      default: {
        if (Object.keys(bin).indexOf(cmd) === -1) {
          setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
        } else {
          try {
            const output = await bin[cmd](args);

            setHistory(output);
          } catch (error) {
            setHistory(error.message);
          }
        }
      }
    }
  };

  return (
    <ShellContext.Provider
      value={{
        history,
        command,
        lastCommandIndex,
        setHistory,
        setCommand,
        setLastCommandIndex,
        execute,
        clearHistory,
      }}
    >
      {children}
    </ShellContext.Provider>
  );
};
