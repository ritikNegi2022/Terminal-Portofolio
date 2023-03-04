import { commandExists } from "@/utils/commandExists";
import { useShell } from "@/utils/shellProvider";
import { handleTabCompletion } from "@/utils/tabCompletion";
import { useTheme } from "@/utils/themeProvider";
import { useEffect, useState } from "react";
import { Ps1 } from "./Ps1";

export const Input = ({ inputRef}) => {
  const { theme } = useTheme();
  const [value, setValue] = useState("");
  const {
    setCommand,
    history,
    lastCommandIndex,
    setHistory,
    setLastCommandIndex,
    clearHistory,
  } = useShell();

  useEffect(() => {
    setCommand("banner");
  }, []);

  const onSubmit = async (event) => {
    const commands = history
      .map(({ command }) => command)
      .filter((value) => value);
    if (event.key === "c" && event.ctrlKey) {
      event.preventDefault();
      setValue("");
      setHistory("");
      setLastCommandIndex(0);
    }
    if (event.key === "1" && event.ctrlKey) {
      event.preventDefault();
      clearHistory();
    }
    if (event.key === "Tab") {
      event.preventDefault();
      handleTabCompletion(value, setValue);
    }
    if (event.key === "Enter" || event.code === "13") {
      event.preventDefault();
      setLastCommandIndex(0);
      setCommand(value);
      setValue("");
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - index]);
      }
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!commands.length) {
        return;
      }
      const index = lastCommandIndex - 1;

      if (index > 0) {
        setLastCommandIndex(index);
        setValue(commands[commands.length - 1]);
      } else {
        setLastCommandIndex(0);
        setValue("");
      }
    }
  };
  return (
    <div className="inputContainer">
      <label htmlFor="prompt">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        aria-label="prompt"
        style={{
          backgroundColor: theme.background,
          color:
            commandExists(value) || value === "" ? theme.correct : theme.error,
        }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default Input;
