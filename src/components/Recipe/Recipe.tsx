import React from "react";
import { RecipeProps } from "./types";

const Recipe = (props: RecipeProps) => {
  const { recipe } = props;
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
        <ul>
          {recipe.ingredients.map((ingredient: string) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div>
        <span className="subheader">Steps: </span>
        {recipe.steps.map((step: string, index: number) => {
          return (
            <div>
              {++index}) {step}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Recipe;
