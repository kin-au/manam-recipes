import React from "react";
import { RecipeCardProps } from "./types";
import * as SC from "./RecipeCard.style.js";

const RecipeCard = (props: RecipeCardProps) => {
  const { recipe } = props;
  return (
    <SC.RecipeCard key={recipe.id}>
      <header>{recipe.name}</header>
      <div>{recipe.cuisine}</div>
    </SC.RecipeCard>
  );
};

export default RecipeCard;
