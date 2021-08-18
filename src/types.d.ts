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

export type RecipeData =
  | any
  | {
      id: number;
      url: string;
      name: string;
      description: string;
      image: string;
      cuisine: string;
      type: string;
      servings: string;
      time: number;
      ingredients: string[];
      steps: string[];
      source: string;
      enabled: boolean;
    };

export type AllRecipeData = any | Recipe[];
