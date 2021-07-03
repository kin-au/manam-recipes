import { AllRecipeData } from "../types";
import cuisineSearch from "./cuisineSearch";
import nameSearch from "./nameSearch";

const allSearch = (
  allRecipes: AllRecipeData,
  nameSearchText: string,
  cuisineSearchText: string
): AllRecipeData => {
  return cuisineSearch(
    nameSearch(allRecipes, nameSearchText),
    cuisineSearchText
  );
};

export default allSearch;
