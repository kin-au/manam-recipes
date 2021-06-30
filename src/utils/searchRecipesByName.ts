import { RecipeData, AllRecipeData } from "../types";

const searchRecipesByName = (allRecipes: AllRecipeData, searchText: string) => {
  return allRecipes.filter((recipe: RecipeData) => {
    return recipe.name.toLowerCase().includes(searchText.toLowerCase());
  });
};

export default searchRecipesByName;
