import React from "react";
import * as SC from "./Header.style.js";
import Navbar from "../Navbar/Navbar";
import RecipeFinder from "../RecipeFinder/RecipeFinder";

const Header = () => {
  return (
    <SC.Header>
      <h1>Manam recipes</h1>
      <Navbar />
      <RecipeFinder />
    </SC.Header>
  );
};

export default Header;
