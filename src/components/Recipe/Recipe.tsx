import React from "react";
// import { RecipeData } from "../../types";
import { RecipeProps } from "./types";
// import * as SC from "./Recipe.style.js";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;
  return (
    <>
      <div>{recipe.name}</div>
      <div>{recipe.cuisine}</div>
    </>
  );
};

export default Recipe;
