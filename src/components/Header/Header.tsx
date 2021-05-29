import React from "react";
import * as SC from "./Header.style.js";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <SC.Header>
      <h1>Manam recipes</h1>
      <Navbar />
    </SC.Header>
  );
};

export default Header;
