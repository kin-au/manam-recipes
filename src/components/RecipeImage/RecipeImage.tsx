import React from "react";
import { RecipeImageProps } from "./types";

const RecipeImage = (props: RecipeImageProps) => {
  const { recipeName, recipeImage } = props;

  const initials = (name: string): string => {
    const arr = name.split(" ");
    const firstChar = arr[0].charAt(0);
    const secondChar = arr[1]?.charAt(0) || arr[0].charAt(1);
    return `${firstChar}${secondChar}`.toUpperCase();
  };

  return (
    <div>
      {recipeImage ? (
        <img src={recipeImage} alt="dish" />
      ) : (
        <div>{initials(recipeName)}</div>
      )}
    </div>
  );
};

export default RecipeImage;
