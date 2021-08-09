import React from "react";
import { Link } from "react-router-dom";
import { RecipeProps } from "./types";
import DOMPurify from "dompurify";
import {
  REGEX_BOLD_OPEN,
  REGEX_BOLD_CLOSE,
} from "../../utils/consts";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;

  const ingredientsList = (ingredients: string[]) => {
    return ingredients.map((ingredient: string) => {
      if (ingredient.match(REGEX_BOLD_OPEN)) {
        ingredient = ingredient.replace(REGEX_BOLD_OPEN, "<strong>");
        ingredient = ingredient.replace(REGEX_BOLD_CLOSE, "</strong>");
      }
      return (
        <>
          <li
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(ingredient),
            }}
          ></li>
        </>
      );
    });
  };

  const recipeSteps = (steps: string[]) => {
    return steps.map((step: string, index: number) => {
      if (step.match(REGEX_BOLD_OPEN)) {
        step = step.replace(REGEX_BOLD_OPEN, "<strong>");
        step = step.replace(REGEX_BOLD_CLOSE, "</strong>");
      }
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
      <Link to={"/recipes"}>Back to search results</Link>
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
