import React from "react";
import * as SC from "./RecipeFinder.style";
import allSearch from "../../utils/allSearch";
import cuisineList from "../../utils/cuisineList";
import sortRecipes from "../../utils/sortRecipes";
import typeList from "../../utils/typeList";
import { FinderFields, RecipeFinderProps, SortOrder, SortType } from "./types";

const RecipeFinder = (props: RecipeFinderProps) => {
  const { allRecipes, setShowRecipes } = props;

  const [finderFields, setFinderFields] = React.useState<FinderFields>({
    nameSearchText: "",
    cuisineSearchText: "",
    typeSearchText: "",
    sortType: "Alphabetical",
    sortOrder: "Ascending",
  });

  React.useEffect(() => {
    const searchedRecipes = allSearch(
      allRecipes,
      finderFields.nameSearchText,
      finderFields.cuisineSearchText,
      finderFields.typeSearchText
    );
    setShowRecipes(
      sortRecipes(
        searchedRecipes,
        finderFields.sortType,
        finderFields.sortOrder
      )
    );
  }, [
    setShowRecipes,
    allRecipes,
    finderFields.nameSearchText,
    finderFields.cuisineSearchText,
    finderFields.typeSearchText,
    finderFields.sortType,
    finderFields.sortOrder,
  ]);

  const resetSearch = () => {
    setFinderFields({
      nameSearchText: "",
      cuisineSearchText: "",
      typeSearchText: "",
      sortType: "Alphabetical",
      sortOrder: "Ascending",
    });
  };

  return (
    <SC.RecipeFinder>
      <SC.SearchContainer>
        <SC.Field>
          <SC.FieldLabel htmlFor="nameSearch">Search recipes</SC.FieldLabel>
          <SC.FieldInput>
            <input
              id="nameSearch"
              className="inputField"
              type="search"
              placeholder="Find a recipe by name"
              value={finderFields.nameSearchText}
              onChange={(event) =>
                setFinderFields({
                  ...finderFields,
                  nameSearchText: event.target.value,
                })
              }
            />
          </SC.FieldInput>
        </SC.Field>
        <SC.Field>
          <SC.FieldLabel htmlFor="cuisineSearch">Search cuisines</SC.FieldLabel>
          <SC.FieldInput>
            <select
              id="cuisineSearch"
              className="inputField"
              value={finderFields.cuisineSearchText}
              onChange={(event) =>
                setFinderFields({
                  ...finderFields,
                  cuisineSearchText: event.target.value,
                })
              }
            >
              <option value="">All cuisines</option>
              {cuisineList(allRecipes).map((cuisine) => {
                return <option value={cuisine}>{cuisine}</option>;
              })}
            </select>
          </SC.FieldInput>
        </SC.Field>
        <SC.Field>
          <SC.FieldLabel htmlFor="typeSearch">Search types</SC.FieldLabel>
          <SC.FieldInput>
            <select
              id="typeSearch"
              className="inputField"
              value={finderFields.typeSearchText}
              onChange={(event) =>
                setFinderFields({
                  ...finderFields,
                  typeSearchText: event.target.value,
                })
              }
            >
              <option value="">All types</option>
              {typeList(allRecipes).map((type) => {
                return <option value={type}>{type}</option>;
              })}
            </select>
          </SC.FieldInput>
        </SC.Field>
      </SC.SearchContainer>
      <SC.SortContainer>
        <SC.Field>
          <SC.FieldLabel htmlFor="sortType">Sort by</SC.FieldLabel>
          <SC.FieldInput>
            <select
              id="sortType"
              className="inputField"
              value={finderFields.sortType}
              onChange={(event) =>
                setFinderFields({
                  ...finderFields,
                  sortType: event.target.value as SortType,
                })
              }
            >
              <option value="Alphabetical">Alphabetical</option>
              <option value="Prep & cook time">Prep & cook time</option>
              <option value="Number of ingredients">
                Number of ingredients
              </option>
            </select>
          </SC.FieldInput>
        </SC.Field>
        <SC.Field>
          <SC.FieldLabel htmlFor="sortOrder">Sort direction</SC.FieldLabel>
          <SC.FieldInput>
            <select
              id="sortOrder"
              className="inputField"
              value={finderFields.sortOrder}
              onChange={(event) =>
                setFinderFields({
                  ...finderFields,
                  sortOrder: event.target.value as SortOrder,
                })
              }
            >
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </SC.FieldInput>
        </SC.Field>
        <SC.Field>
          <SC.ResetButton type="button" onClick={() => resetSearch()}>
            Reset all
          </SC.ResetButton>
        </SC.Field>
      </SC.SortContainer>
    </SC.RecipeFinder>
  );
};

export default RecipeFinder;
