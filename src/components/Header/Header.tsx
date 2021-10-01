import React from "react";
import * as SC from "./Header.style.js";
import { HeaderProps } from "./types";
import Navbar from "../Navbar/Navbar";
import RecipeFinder from "../RecipeFinder/RecipeFinder";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useLocation, Link } from "react-router-dom";

const Header = (props: HeaderProps) => {
  const {
    theme,
    setTheme,
    allRecipes,
    setShowRecipes,
    finderFields,
    setFinderFields,
  } = props;
  const showingRecipes = useLocation().pathname === "/recipes";
  return (
    <SC.Header>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Link to="/">
        <h1>Manam Recipes</h1>
      </Link>
      <Navbar />
      {!showingRecipes ? null : (
        <RecipeFinder
          allRecipes={allRecipes}
          setShowRecipes={setShowRecipes}
          finderFields={finderFields}
          setFinderFields={setFinderFields}
        />
      )}
    </SC.Header>
  );
};

export default Header;
