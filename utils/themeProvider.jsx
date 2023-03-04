import Themes from "../themes.json";
import config from "../config.json";
import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, _setTheme] = useState(Themes[0]);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || config.theme);
  }, [theme]);

  const setTheme = (name) => {
    const index = Themes.findIndex(
      (colorScheme) => colorScheme.name.toLowerCase() === name
    );

    if (index === -1) {
      return `Theme '${name}' not found. Try 'theme ls' to see the list of available themes.`;
    }
    _setTheme(Themes[index]);
    localStorage.setItem("theme", name);
    return `Theme ${Themes[index].name} set successfully!`;
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
