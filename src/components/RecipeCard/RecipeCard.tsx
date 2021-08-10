import React from "react";
import { RecipeCardProps } from "./types";
import * as SC from "./RecipeCard.style.js";

const RecipeCard = (props: RecipeCardProps) => {
  const { recipe, setSelectedRecipe } = props;
  return (
    <SC.StyledLink
      to={`/recipes/${recipe.url}`}
      onClick={() => setSelectedRecipe(recipe)}
    >
      <SC.RecipeCard key={recipe.id}>
        <header>{recipe.name}</header>
        <div>
          <span className="subheader">Cuisine: </span>
          {recipe.cuisine}
        </div>
        <div>
          <span className="subheader">Type: </span>
          {recipe.type}
        </div>
        <div>
          <span className="subheader">Prep & cook time: </span>
          {recipe.time}mins
        </div>
      </SC.RecipeCard>
    </SC.StyledLink>
  );
};

export default RecipeCard;
