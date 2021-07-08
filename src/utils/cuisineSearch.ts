import { RecipeData, AllRecipeData } from "../types";

const cuisineSearch = (
  recipeList: AllRecipeData,
  cuisineSearchText: string
): AllRecipeData => {
  if (cuisineSearchText) {
    return recipeList.filter((recipe: RecipeData) => {
      return recipe.cuisine === cuisineSearchText;
    });
  } else {
    return recipeList;
  }
};

export default cuisineSearch;
