import { AllRecipeData, RecipeData } from "../types";

const typeSearch = (
  recipeList: AllRecipeData,
  typeSearchText: string
): AllRecipeData => {
  if (typeSearchText) {
    return recipeList.filter((recipe: RecipeData) => {
      return recipe.type === typeSearchText;
    });
  } else {
    return recipeList;
  }
};

export default typeSearch;
