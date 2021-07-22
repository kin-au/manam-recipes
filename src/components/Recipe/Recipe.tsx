import React from "react";
import { RecipeProps } from "./types";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;
  return <>{recipe.name}</>;
};

export default Recipe;
