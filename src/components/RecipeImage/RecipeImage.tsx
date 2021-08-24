import React from "react";
import { RecipeImageProps } from "./types";
import * as SC from "./RecipeImage.style.js";

const RecipeImage = (props: RecipeImageProps) => {
  const { recipeName, recipeImage } = props;

  const initials = (name: string): string => {
    const validChar = /[a-zA-Z]/;
    const words = name.split(" ");
    let firstChar = "";
    let secondChar = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i].split("");
      for (let j = 0; j < word.length; j++)
        if (validChar.test(word[j].normalize())) {
          if (!firstChar) {
            firstChar = word[j];
            if (words.length > 1) {
              j = word.length;
            }
          } else if (!secondChar) {
            secondChar = word[j];
            j = word.length;
          }
        }
    }
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
