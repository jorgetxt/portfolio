import React, { createContext, useState } from "react";
import { ThemesName } from "./Theme";

interface Props {
  children: React.ReactNode;
}

function MyProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemesName>("light");
  // ...
  console.log("cambio de context ", theme);
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      {children}
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
