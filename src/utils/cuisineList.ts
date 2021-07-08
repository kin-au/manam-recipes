import { AllRecipeData, RecipeData } from "../types";

const cuisineList = (allRecipes: AllRecipeData): string[] => {
  const cuisineList: string[] = allRecipes.map(
    (recipe: RecipeData) => recipe.cuisine
  );
  return Array.from(new Set(cuisineList));
};

export default cuisineList;
