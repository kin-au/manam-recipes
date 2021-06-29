import React from "react";
import * as SC from "./Header.style.js";
import { HeaderProps } from "./types";
import Navbar from "../Navbar/Navbar";
import RecipeFinder from "../RecipeFinder/RecipeFinder";

const Header = (props: HeaderProps) => {
  const { allRecipes } = props;
  return (
    <SC.Header>
      <h1>Manam recipes</h1>
      <Navbar />
      <RecipeFinder allRecipes={allRecipes} />
    </SC.Header>
  );
};

export default Header;
