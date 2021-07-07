import { AllRecipeData } from "../types";
import cuisineSearch from "./cuisineSearch";
import nameSearch from "./nameSearch";
import typeSearch from "./typeSearch";

const allSearch = (
  allRecipes: AllRecipeData,
  nameSearchText: string,
  cuisineSearchText: string,
  typeSearchText: string
): AllRecipeData => {
  return typeSearch(
    cuisineSearch(nameSearch(allRecipes, nameSearchText), cuisineSearchText),
    typeSearchText
  );
};

export default allSearch;
