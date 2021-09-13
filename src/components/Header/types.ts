import { AllRecipeData, FinderFields } from "../../types";

export interface HeaderProps {
  allRecipes: AllRecipeData;
  setShowRecipes: React.Dispatch<any>;
  finderFields: FinderFields;
  setFinderFields: React.Dispatch<React.SetStateAction<FinderFields>>;
}
