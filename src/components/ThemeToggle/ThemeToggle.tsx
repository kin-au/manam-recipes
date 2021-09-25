import React from "react";
import { ThemeToggleProps } from "./types";
import * as SC from "./ThemeToggle.style.js";

const ThemeToggle = (props: ThemeToggleProps) => {
  const { theme, setTheme } = props;
  return (
    <SC.ToggleButton
      type="button"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? "Dark" : "Light"} theme
    </SC.ToggleButton>
  );
};

export default ThemeToggle;
