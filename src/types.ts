export interface Recipe {
  name: string;
  description: string;
  time: number;
  ingredients: string[];
  steps: string[];
}

export type RecipeData = any | Recipe[];
