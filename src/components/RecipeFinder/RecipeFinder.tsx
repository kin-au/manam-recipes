import React from "react";
import { RecipeFinderProps } from "./types";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes } = props;
  return (
    <>
      <input type="text" placeholder="Search by recipe name"></input>
    </>
  );
};

export default RecipeFinder;
