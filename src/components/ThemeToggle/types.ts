import { Themes } from "../../types";

export interface ThemeToggleProps {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}
