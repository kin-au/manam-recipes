# Manam Recipes

#### A collection of simple, delicious, no-nonsense recipes.

##

##### User stories

- As a user, I want to navigate an intuitive and responsive interface to find a suitable recipe
- As a user, I want to be able to see a list of all recipes
- As a user, I want to be able to search for a recipe by typing in a search box
- As a user, I want to be able to sort all displayed recipes by name, by number of ingredients, or by cooking time
- As a user, I want to be able to filter all displayed recipe by cuisine, type (meal, dessert, etc.)
- As a user, for each recipe, I want to see a description, a list of ingredients, and a step-by-step method
- As a user, I want to view any dependent sub-recipes (e.g. sauces) as a pop-up overlay
- As a user, when viewing a sub-recipe on a pop-up overlay, I want to be able to click a link to view it as a standalone recipe
- As a user, I want to be able to select between light and dark view

##### Additional requirements

- Enable straightforward updating and maintenance of recipes data by a relatively non-technically inclined individual, using a markup-like language
- Markup as follows:
  - `###`: start pop-up overlay, display text
  - `***`: start pop-up overlay url link (between `###` and `+++`)
  - `^^^`: end pop-up overlay url link (within `###` and `+++`)
  - `+++`: end pop-up overlay
  - `%%%`: start bold font
  - `@@@`: end bold font
