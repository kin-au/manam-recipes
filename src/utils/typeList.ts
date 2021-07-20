import { AllRecipeData, RecipeData } from "../types";

const typeList = (allRecipes: AllRecipeData): string[] => {
  const typeList: string[] = allRecipes.map(
    (recipe: RecipeData) => recipe.type
  );
  return Array.from(new Set(typeList)).sort((a, b) => a.localeCompare(b));
};

export default typeList;