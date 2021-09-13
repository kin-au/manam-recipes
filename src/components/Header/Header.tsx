import React from "react";
import * as SC from "./Header.style.js";
import { HeaderProps } from "./types";
import Navbar from "../Navbar/Navbar";
import RecipeFinder from "../RecipeFinder/RecipeFinder";
import { useLocation } from "react-router-dom";

const Header = (props: HeaderProps) => {
  const { allRecipes, setShowRecipes, finderFields, setFinderFields } = props;
  const showingRecipes = useLocation().pathname === "/recipes";
  return (
    <SC.Header>
      <h1>Manam Recipes</h1>
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
