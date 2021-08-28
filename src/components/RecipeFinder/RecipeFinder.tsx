import React from "react";
import * as SC from "./RecipeFinder.style";
import allSearch from "../../utils/allSearch";
import cuisineList from "../../utils/cuisineList";
import sortRecipes from "../../utils/sortRecipes";
import typeList from "../../utils/typeList";
import { RecipeFinderProps, SortOrder, SortType } from "./types";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;

  const [nameSearchText, setNameSearchText] = React.useState("");
  const [cuisineSearchText, setCuisineSearchText] = React.useState("");
  const [typeSearchText, setTypeSearchText] = React.useState("");
  const [sortType, setSortType] = React.useState<SortType>("Alphabetical");
  const [sortOrder, setSortOrder] = React.useState<SortOrder>("Ascending");

  React.useEffect(() => {
    const searchedRecipes = allSearch(
      allRecipes,
      nameSearchText,
      cuisineSearchText,
      typeSearchText
    );
    setShowRecipes(sortRecipes(searchedRecipes, sortType, sortOrder));
  }, [
    setShowRecipes,
    allRecipes,
    nameSearchText,
    cuisineSearchText,
    typeSearchText,
    sortType,
    sortOrder,
  ]);

  const resetSearch = () => {
    setNameSearchText("");
    setCuisineSearchText("");
    setTypeSearchText("");
    setSortType("Alphabetical");
    setSortOrder("Ascending");
  };

  return (
    <SC.RecipeFinder>
      <SC.SearchContainer>
        <SC.Field>
          <label htmlFor="nameSearch">Search recipes</label>
          <input
            id="nameSearch"
            className="inputField"
            type="search"
            placeholder="Find a recipe by name"
            value={nameSearchText}
            onChange={(event) => setNameSearchText(event.target.value)}
          />
        </SC.Field>
        <SC.Field>
          <label htmlFor="cuisineSearch">Search cuisines</label>
          <select
            id="cuisineSearch"
            className="inputField"
            value={cuisineSearchText}
            onChange={(event) => setCuisineSearchText(event.target.value)}
          >
            <option value="">All cuisines</option>
            {cuisineList(allRecipes).map((cuisine) => {
              return <option value={cuisine}>{cuisine}</option>;
            })}
          </select>
        </SC.Field>
        <SC.Field>
          <label htmlFor="typeSearch">Search types</label>
          <select
            id="typeSearch"
            className="inputField"
            value={typeSearchText}
            onChange={(event) => setTypeSearchText(event.target.value)}
          >
            <option value="">All types</option>
            {typeList(allRecipes).map((type) => {
              return <option value={type}>{type}</option>;
            })}
          </select>
        </SC.Field>
      </SC.SearchContainer>
      <SC.SortContainer>
        <SC.Field>
          <label htmlFor="sortType">Sort by</label>
          <select
            id="sortType"
            className="inputField"
            value={sortType}
            onChange={(event) => setSortType(event.target.value as SortType)}
          >
            <option value="Alphabetical">Alphabetical</option>
            <option value="Prep & cook time">Prep & cook time</option>
            <option value="Number of ingredients">Number of ingredients</option>
          </select>
        </SC.Field>
        <SC.Field>
          <label htmlFor="sortOrder">Sort direction</label>
          <select
            id="sortOrder"
            className="inputField"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
          >
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </SC.Field>
      </SC.SortContainer>
      <button type="button" onClick={() => resetSearch()}>
        Reset all
      </button>
    </SC.RecipeFinder>
  );
};

export default RecipeFinder;
