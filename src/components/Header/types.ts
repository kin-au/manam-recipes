import { AllRecipeData, FinderFields, Themes } from "../../types";

export interface HeaderProps {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
  allRecipes: AllRecipeData;
  setShowRecipes: React.Dispatch<any>;
  finderFields: FinderFields;
  setFinderFields: React.Dispatch<React.SetStateAction<FinderFields>>;
}
