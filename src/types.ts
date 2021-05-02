export interface Recipe {
  name: string;
  description: string;
  cuisine: string;
  type: string;
  servings: string;
  time: number;
  ingredients: string[];
  steps: string[];
  source: string;
}

export type RecipeData = any | Recipe[];
