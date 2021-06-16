import React from "react";
import * as SC from "./Recipes.style.js";
import { RecipesProps } from "./types";

const Recipes = (props: RecipesProps) => {
  const { recipes } = props;

  return (
    <SC.Container>
      <p>Recipes page</p>
    </SC.Container>
  );
};

export default Recipes;
