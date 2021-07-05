import { RecipeData, AllRecipeData } from "../types";

const cuisineSearch = (
  recipeList: AllRecipeData,
  cuisineSearchText: string
): AllRecipeData => {
  return recipeList.filter((recipe: RecipeData) => {
    return recipe.cuisine === cuisineSearchText;
  });
};

export default cuisineSearch;
