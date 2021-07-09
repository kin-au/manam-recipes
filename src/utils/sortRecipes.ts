import { SortOrder, SortType } from "../components/RecipeFinder/types";
import { AllRecipeData, RecipeData } from "../types";

const sortType = (
  recipeList: AllRecipeData,
  type: SortType,
  order: SortOrder
): AllRecipeData => {
  // const types = {
  //   Alphabetical: "Name",
  //   Time: "Time",
  //   "Number of ingredients": "Ingredients",
  // };
  // const sortedList: AllRecipeData = [];
  return recipeList.sort((a: RecipeData, b: RecipeData) =>
    a["name"].localeCompare(b["name"])
  );
};

export default sortType;
