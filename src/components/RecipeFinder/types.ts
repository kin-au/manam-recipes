import { AllRecipeData } from "../../types";

export interface RecipeFinderProps {
  allRecipes: AllRecipeData;
  setShowRecipes: React.Dispatch<any>;
}

export interface FinderFields {
  nameSearchText: string;
  cuisineSearchText: string;
  typeSearchText: string;
  sortType: SortType;
  sortOrder: SortOrder;
}

export type SortType =
  | "Alphabetical"
  | "Prep & cook time"
  | "Number of ingredients";

export type SortOrder = "Ascending" | "Descending";
