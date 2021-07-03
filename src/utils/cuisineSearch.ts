import { RecipeData, AllRecipeData } from "../types";

const cuisineSearch = (
  recipeList: AllRecipeData,
  cuisineSearchText: string
): AllRecipeData => {
  return recipeList.filter((recipe: RecipeData) => {
    return recipe.cuisine
      .toLowerCase()
      .includes(cuisineSearchText.toLowerCase());
  });
};

export default cuisineSearch;
