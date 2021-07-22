import React from "react";
import { RecipeData } from "../../types";
import { RecipesProps } from "./types";
import * as SC from "./Recipes.style.js";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = (props: RecipesProps) => {
  const { showRecipes, setSelectedRecipe } = props;

  return (
    <SC.Container>
      {!showRecipes.length ? (
        <h2>No recipes found :(</h2>
      ) : (
        showRecipes.map((recipe: RecipeData) => {
          return (
            <RecipeCard recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
          );
        })
      )}
    </SC.Container>
  );
};

export default Recipes;
