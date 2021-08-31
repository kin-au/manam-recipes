import React from "react";
import { RecipeCardProps } from "./types";
import * as SC from "./RecipeCard.style.js";
import RecipeImage from "../RecipeImage/RecipeImage";

const RecipeCard = (props: RecipeCardProps) => {
  const { recipe, setSelectedRecipe } = props;
  return (
    <SC.StyledLink
      to={`/recipes/${recipe.url}`}
      onClick={() => setSelectedRecipe(recipe)}
    >
      <SC.RecipeCard key={recipe.id}>
        <SC.CardHeader>{recipe.name}</SC.CardHeader>
        <SC.CardBody>
          <SC.RecipeText>
            <div className="recipeDetail">
              <span className="subheader">Cuisine: </span>
              {recipe.cuisine}
            </div>
            <div className="recipeDetail">
              <span className="subheader">Type: </span>
              {recipe.type}
            </div>
            <div className="recipeDetail">
              <span className="subheader">Prep & cook time: </span>
              {recipe.time}mins
            </div>
          </SC.RecipeText>
          <RecipeImage recipeName={recipe.name} recipeImage={recipe.image} />
        </SC.CardBody>
      </SC.RecipeCard>
    </SC.StyledLink>
  );
};

export default RecipeCard;
