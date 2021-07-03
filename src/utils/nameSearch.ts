import { RecipeData, AllRecipeData } from "../types";

const nameSearch = (
  recipeList: AllRecipeData,
  nameSearchText: string
): AllRecipeData => {
  return recipeList.filter((recipe: RecipeData) => {
    return recipe.name.toLowerCase().includes(nameSearchText.toLowerCase());
  });
};

export default nameSearch;
