import React from "react";
import { PopupRecipeProps } from "./types";

const PopupRecipe = (props: PopupRecipeProps) => {
  const { recipe } = props;

  const ingredientsList = (ingredients: string[]) => {
    return ingredients.map((ingredient: string) => {
      return <li>{ingredient}</li>;
    });
  };

  const recipeSteps = (steps: string[]) => {
    return steps.map((step: string, index: number) => {
      return (
        <div>
          <span>{++index}) </span>
          <span>{step}</span>
        </div>
      );
    });
  };

  return (
    <>
      <header>{recipe.name}</header>
      <div>{recipe.description}</div>
      <div>
        <span className="subheader">Cuisine: </span>
        {recipe.cuisine}
      </div>
      <div>
        <span className="subheader">Type: </span>
        {recipe.type}
      </div>
      <div>
        <span className="subheader">Servings: </span>
        {recipe.servings}
      </div>
      <div>
        <span className="subheader">Prep & cook time: </span>
        {recipe.time}mins
      </div>
      <div>
        <span className="subheader">Ingredients: </span>
        <ul>{ingredientsList(recipe.ingredients)}</ul>
      </div>
      <div>
        <span className="subheader">Steps: </span>
        {recipeSteps(recipe.steps)}
      </div>
    </>
  );
};

export default PopupRecipe;
