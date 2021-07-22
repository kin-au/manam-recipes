import { RecipeData } from "../../types";

export interface RecipeCardProps {
  recipe: RecipeData;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<RecipeData>>;
}
