import React from "react";
import allSearch from "../../utils/allSearch";
import cuisineList from "../../utils/cuisineList";
import typeList from "../../utils/typeList";
import { RecipeFinderProps } from "./types";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;
  const [nameSearchText, setNameSearchText] = React.useState("");
  const [cuisineSearchText, setCuisineSearchText] = React.useState("");
  const [typeSearchText, setTypeSearchText] = React.useState("");

  React.useEffect(() => {
    setShowRecipes(
      allSearch(allRecipes, nameSearchText, cuisineSearchText, typeSearchText)
    );
  }, [
    setShowRecipes,
    allRecipes,
    nameSearchText,
    cuisineSearchText,
    typeSearchText,
  ]);

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
      <select
        id="cuisineSearch"
        value={cuisineSearchText}
        onChange={(event) => setCuisineSearchText(event.target.value)}
      >
        <option value="">All cuisines</option>
        {cuisineList(allRecipes).map((cuisine) => {
          return <option value={cuisine}>{cuisine}</option>;
        })}
      </select>
      <label htmlFor="typeSearch">Search types</label>
      <select
        id="typeSearch"
        value={typeSearchText}
        onChange={(event) => setTypeSearchText(event.target.value)}
      >
        <option value="">All types</option>
        {typeList(allRecipes).map((type) => {
          return <option value={type}>{type}</option>;
        })}
      </select>
    </>
  );
};

export default RecipeFinder;
