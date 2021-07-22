import { AllRecipeData, RecipeData } from "../../types";

export interface RecipesProps {
  showRecipes: AllRecipeData;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<RecipeData>>;
}
