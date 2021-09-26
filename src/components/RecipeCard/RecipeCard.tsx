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
      <SC.RecipeCard>
        <SC.CardHeader>{recipe.name}</SC.CardHeader>
        <SC.CardBody>
          <SC.RecipeText>
            <SC.RecipeDetail>
              <SC.SubHeader>Cuisine: </SC.SubHeader>
              {recipe.cuisine}
            </SC.RecipeDetail>
            <SC.RecipeDetail>
              <SC.SubHeader>Type: </SC.SubHeader>
              {recipe.type}
            </SC.RecipeDetail>
            <SC.RecipeDetail>
              <SC.SubHeader>Prep & cook time: </SC.SubHeader>
              {recipe.time}mins
            </SC.RecipeDetail>
          </SC.RecipeText>
          <RecipeImage recipeName={recipe.name} recipeImage={recipe.image} />
        </SC.CardBody>
      </SC.RecipeCard>
    </SC.StyledLink>
  );
};

export default RecipeCard;
