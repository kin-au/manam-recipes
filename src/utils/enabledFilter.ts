import { AllRecipeData, RecipeData } from "../types";

const enabledFilter = (recipeList: AllRecipeData): AllRecipeData => {
  return recipeList.filter((recipe: RecipeData) => recipe.enabled === true);
};

export default enabledFilter;
