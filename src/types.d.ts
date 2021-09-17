import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryBackground: string;
    primaryText: string;
    secondaryBackground: string;
    secondaryText: string;
    accent: string;
  }
}

export type Themes = "light" | "dark";

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

export interface FinderFields {
  nameSearchText: string;
  cuisineSearchText: string;
  typeSearchText: string;
  sortType: SortType;
  sortOrder: SortOrder;
}
