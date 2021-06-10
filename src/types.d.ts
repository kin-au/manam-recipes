import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
    };
  }
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  cuisine: string;
  type: string;
  servings: string;
  time: number;
  ingredients: string[];
  steps: string[];
  source: string;
  enabled: boolean;
}

export type RecipeData = any | Recipe[];
