import { AllRecipeData, FinderFields } from "../../types";

export interface RecipeFinderProps {
  allRecipes: AllRecipeData;
  setShowRecipes: React.Dispatch<any>;
  finderFields: FinderFields;
  setFinderFields: React.Dispatch<React.SetStateAction<FinderFields>>;
}

export type SortType =
  | "Alphabetical"
  | "Prep & cook time"
  | "Number of ingredients";

export type SortOrder = "Ascending" | "Descending";
