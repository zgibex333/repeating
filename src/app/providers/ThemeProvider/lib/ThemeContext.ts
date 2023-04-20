import React from "react";

export enum Theme {
  light = "light",
  dark = "app_dark_theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme-repeating-project";
