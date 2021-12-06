import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./Recipe.style.js";
import { RecipeProps } from "./types";
import DOMPurify from "dompurify";
import { REGEX } from "../../utils/consts";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;

  const ingredientsList = (ingredients: string[]) => {
    return ingredients.map((ingredient: string, index: number) => {
      if (ingredient.match(REGEX.BOLD_OPEN)) {
        ingredient = ingredient.replace(REGEX.BOLD_OPEN, "<strong>");
        ingredient = ingredient.replace(REGEX.BOLD_CLOSE, "</strong>");
      }
      return (
        <>
          <li
            key={`ingredient-${index}`}
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
      if (step.match(REGEX.BOLD_OPEN)) {
        step = step.replace(REGEX.BOLD_OPEN, "<strong>");
        step = step.replace(REGEX.BOLD_CLOSE, "</strong>");
      }
      return (
        <li
          key={`step-${index}`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(step),
          }}
        ></li>
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
        {!recipe.description ? null : <div>{recipe.description}</div>}
      </SC.Header>
      {!recipe.cuisine ? null : (
        <SC.SubSection>
          <SC.SubHeader className="subheader">Cuisine: </SC.SubHeader>
          {recipe.cuisine}
        </SC.SubSection>
      )}
      {!recipe.type ? null : (
        <SC.SubSection>
          <SC.SubHeader className="subheader">Type: </SC.SubHeader>
          {recipe.type}
        </SC.SubSection>
      )}
      {!recipe.servings ? null : (
        <SC.SubSection>
          <SC.SubHeader className="subheader">Servings: </SC.SubHeader>
          {recipe.servings}
        </SC.SubSection>
      )}
      {!recipe.time ? null : (
        <SC.SubSection>
          <SC.SubHeader className="subheader">Prep & cook time: </SC.SubHeader>
          {recipe.time}mins
        </SC.SubSection>
      )}
      <SC.SubSection>
        <SC.SubHeader className="subheader">Ingredients: </SC.SubHeader>
        <SC.UnorderedList>
          {ingredientsList(recipe.ingredients)}
        </SC.UnorderedList>
      </SC.SubSection>
      <SC.SubSection>
        <SC.SubHeader className="subheader">Steps: </SC.SubHeader>
        <SC.OrderedList>{recipeSteps(recipe.steps)}</SC.OrderedList>
      </SC.SubSection>
    </SC.Recipe>
  );
};

export default Recipe;
