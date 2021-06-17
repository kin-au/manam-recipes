import React from "react";
import { Recipe } from "../../types.js";
import * as SC from "./Recipes.style.js";
import { RecipesProps } from "./types";

const Recipes = (props: RecipesProps) => {
  const { recipes } = props;

  return (
    <SC.Container>
      <p>Recipes page</p>
      {!recipes.length ? (
        <h1>"Loading..."</h1>
      ) : (
        recipes.map((recipe: Recipe) => {
          return <div>{recipe.name}</div>;
        })
      )}
    </SC.Container>
  );
};

export default Recipes;
