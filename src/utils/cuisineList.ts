import { AllRecipeData, RecipeData } from "../types";

const cuisineList = (allRecipes: AllRecipeData): string[] => {
  const cuisineList: string[] = allRecipes
    .filter((recipe: RecipeData) => {
      return recipe.cuisine !== null;
    })
    .map((recipe: RecipeData) => {
      return recipe.cuisine;
    });
  return Array.from(new Set(cuisineList)).sort((a, b) => a.localeCompare(b));
};

export default cuisineList;
