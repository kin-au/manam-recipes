import React from "react";
import { RecipeData } from "../../types";
import { RecipesProps } from "./types";
import * as SC from "./Recipes.style.js";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = (props: RecipesProps) => {
  const { allRecipes } = props;

  return (
    <SC.Container>
      <p>Recipes page</p>
      {!allRecipes.length ? (
        <h1>"Loading..."</h1>
      ) : (
        allRecipes.map((recipe: RecipeData) => {
          return <RecipeCard recipe={recipe} />;
        })
      )}
    </SC.Container>
  );
};

export default Recipes;
