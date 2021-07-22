import React from "react";
import { Link } from "react-router-dom";
import { RecipeCardProps } from "./types";
import * as SC from "./RecipeCard.style.js";

const RecipeCard = (props: RecipeCardProps) => {
  const { recipe, setSelectedRecipe } = props;
  return (
    <Link
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
          <span className="subheader">Prep & cook time: </span>
          {recipe.time}mins
        </div>
        <div>
          <span className="subheader">Type: </span>
          {recipe.type}
        </div>
      </SC.RecipeCard>
    </Link>
  );
};

export default RecipeCard;
