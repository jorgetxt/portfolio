"use client";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { green, yellow, grey } from "@mui/material/colors";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export type ThemesName = "dark" | "light";

export type Themes = Record<ThemesName, Theme>;

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

const dark = createTheme(baseTheme, {
  palette: {
    info: {
      main: baseTheme.palette.secondary.main,
    },
    secondary: {
      main: green[500],
    },
  },
} as ThemeOptions);

const light = createTheme(baseTheme, {
  palette: {
    info: {
      main: baseTheme.palette.secondary.main,
    },
    primary: {
      main: grey[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
} as ThemeOptions);

export default "light" as ThemesName;
