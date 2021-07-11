import { SortOrder, SortType } from "../components/RecipeFinder/types";
import { AllRecipeData, RecipeData } from "../types";

const sortType = (
  recipeList: AllRecipeData,
  type: SortType,
  order: SortOrder
): AllRecipeData => {
  let sortedList: AllRecipeData = recipeList.sort(
    (a: RecipeData, b: RecipeData): AllRecipeData => {
      if (type === "Alphabetical") {
        return a.name.localeCompare(b.name);
      } else if (type === "Time") {
        return a.time - b.time;
      } else if (type === "Number of ingredients") {
        return a.ingredients.length - b.ingredients.length;
      } else {
        return recipeList;
      }
    }
  );
  return order === "Ascending" ? sortedList : sortedList.reverse();
};

export default sortType;
