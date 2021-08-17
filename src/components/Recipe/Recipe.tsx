import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./Recipe.style.js";
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
    <SC.Recipe>
      <SC.BackButton>
        <Link to={"/recipes"}>Back to Search</Link>
      </SC.BackButton>
      <SC.Header>
        <h1>{recipe.name}</h1>
        <div>{recipe.description}</div>
      </SC.Header>
      <div>
        <SC.Subheader className="subheader">Cuisine: </SC.Subheader>
        {recipe.cuisine}
      </div>
      <div>
        <SC.Subheader className="subheader">Type: </SC.Subheader>
        {recipe.type}
      </div>
      <div>
        <SC.Subheader className="subheader">Servings: </SC.Subheader>
        {recipe.servings}
      </div>
      <div>
        <SC.Subheader className="subheader">Prep & cook time: </SC.Subheader>
        {recipe.time}mins
      </div>
      <div>
        <SC.Subheader className="subheader">Ingredients: </SC.Subheader>
        <ul>{ingredientsList(recipe.ingredients)}</ul>
      </div>
      <div>
        <SC.Subheader className="subheader">Steps: </SC.Subheader>
        {recipeSteps(recipe.steps)}
      </div>
    </SC.Recipe>
  );
};

export default Recipe;
