import React from "react";
import { RecipeData } from "../../types";
import { RecipesProps } from "./types";
import * as SC from "./Recipes.style.js";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = (props: RecipesProps) => {
  const { allRecipes, showRecipes } = props;

  return (
    <SC.Container>
      <p>Recipes page</p>
      {!showRecipes.length ? (
        <h1>"Loading..."</h1>
      ) : (
        showRecipes.map((recipe: RecipeData) => {
          return <RecipeCard recipe={recipe} />;
        })
      )}
    </SC.Container>
  );
};

export default Recipes;
