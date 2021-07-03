import React from "react";
import allSearch from "../../utils/allSearch";
import { RecipeFinderProps } from "./types";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;
  const [nameSearchText, setNameSearchText] = React.useState("");
  const [cuisineSearchText, setCuisineSearchText] = React.useState("");

  React.useEffect(() => {
    setShowRecipes(allSearch(allRecipes, nameSearchText, cuisineSearchText));
  }, [setShowRecipes, allRecipes, nameSearchText, cuisineSearchText]);

  return (
    <>
      <label htmlFor="nameSearch">Search recipes</label>
      <input
        id="nameSearch"
        type="search"
        placeholder="Find a recipe by name"
        value={nameSearchText}
        onChange={(event) => setNameSearchText(event.target.value)}
      />
      <label htmlFor="cuisineSearch">Search cuisines</label>
      <input
        id="cuisineSearch"
        type="search"
        placeholder="Search by cuisine name"
        value={cuisineSearchText}
        onChange={(event) => setCuisineSearchText(event.target.value)}
      />
    </>
  );
};

export default RecipeFinder;
