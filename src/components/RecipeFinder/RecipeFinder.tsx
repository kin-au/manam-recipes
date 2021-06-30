import React from "react";
import { RecipeFinderProps } from "./types";
import searchRecipesByName from "../../utils/searchRecipesByName";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;
  const [searchText, setSearchText] = React.useState("");
  const searchRecipes = (value: string) => {
    setSearchText(value);
    setShowRecipes(searchRecipesByName(allRecipes, value));
  };

  return (
    <>
      <label htmlFor="searchRecipes">Search</label>
      <input
        id="searchRecipes"
        type="search"
        placeholder="Find a recipe by name"
        value={searchText}
        onChange={(event) => searchRecipes(event.target.value)}
      ></input>
    </>
  );
};

export default RecipeFinder;
