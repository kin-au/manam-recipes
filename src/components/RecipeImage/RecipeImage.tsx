import React from "react";
import { RecipeImageProps } from "./types";
import * as SC from "./RecipeImage.style.js";

const RecipeImage = (props: RecipeImageProps) => {
  const { recipeName, recipeImage } = props;

  const initials = (name: string): string => {
    const arr = name.split(" ");
    const firstChar = arr[0].charAt(0);
    const secondChar = arr[1]?.charAt(0) || arr[0].charAt(1);
    return `${firstChar}${secondChar}`.toUpperCase();
  };

  return (
    <SC.Container>
      {recipeImage ? (
        <SC.Image src={recipeImage} alt="dish" />
      ) : (
        <SC.Initials>{initials(recipeName)}</SC.Initials>
      )}
    </SC.Container>
  );
};

export default RecipeImage;
