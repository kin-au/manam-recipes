import { RecipeData } from "../types";

const getAllRecipes = (): Promise<RecipeData> => {
  return fetch("../../recipes.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => {
      return response.recipes;
    });
};

export default getAllRecipes;
