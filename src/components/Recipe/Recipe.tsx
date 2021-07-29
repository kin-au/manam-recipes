import React from "react";
import { RecipeProps } from "./types";
import DOMPurify from "dompurify";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;

  const ingredientsList = (ingredients: string[]) => {
    return ingredients.map((ingredient: string) => {
      const boldOpenRegex = /%%%/gi;
      ingredient = ingredient.replace(boldOpenRegex, "<strong>");
      const boldCloseRegex = /@@@/gi;
      ingredient = ingredient.replace(boldCloseRegex, "</strong>");
      return (
        <li
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(ingredient),
          }}
        ></li>
      );
    });
  };

  const recipeSteps = (steps: string[]) => {
    return steps.map((step: string, index: number) => {
      const boldOpenRegex = /%%%/gi;
      step = step.replace(boldOpenRegex, "<strong>");
      const boldCloseRegex = /@@@/gi;
      step = step.replace(boldCloseRegex, "</strong>");
      return (
        <div>
          <span>{++index}) </span>
          <span
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(step),
            }}
          ></span>
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

export default Recipe;
