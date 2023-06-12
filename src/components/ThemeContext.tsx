import { ThemeProvider } from "@mui/material/styles";

import React, { createContext, useState } from "react";
import themes, { ThemesName } from "./Theme";

interface Props {
  children: React.ReactNode;
}

function MyProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemesName>("light");
  // ...
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default MyProvider;

// export const ThemeContext = createContext<
//   [ThemesName, React.Dispatch<React.SetStateAction<ThemesName>>]
// >(null!);

export const ThemeContext = createContext<{
  theme: ThemesName;
  setTheme: React.Dispatch<React.SetStateAction<ThemesName>>;
}>({ theme: "light", setTheme: null! });
