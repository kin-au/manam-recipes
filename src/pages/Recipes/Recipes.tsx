import React from "react";
import { RecipeData } from "../../types";
import { RecipesProps } from "./types";
import * as SC from "./Recipes.style.js";
import Recipe from "../../components/Recipe/Recipe";

const Recipes = (props: RecipesProps) => {
  const { recipes } = props;

  return (
    <SC.Container>
      <p>Recipes page</p>
      {!recipes.length ? (
        <h1>"Loading..."</h1>
      ) : (
        recipes.map((recipe: RecipeData) => {
          return <Recipe recipe={recipe} />;
        })
      )}
    </SC.Container>
  );
};

export default Recipes;
