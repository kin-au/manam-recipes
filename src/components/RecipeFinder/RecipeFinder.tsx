import React from "react";
import { RecipeFinderProps } from "./types";
// import searchRecipesByName from "../../utils/searchRecipesByName";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;
  const [nameSearchText, setNameSearchText] = React.useState("");
  const [cuisineSearchText, setCuisineSearchText] = React.useState("");

  React.useEffect(() => {
    console.log("i search!");
    // create search fn in utils
    // pass allRecipes, nameSearchText, cuisineSearchText, etc
    // then setShowRecipes()
  }, [nameSearchText, cuisineSearchText]);

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
