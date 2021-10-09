import React from "react";
import * as SC from "./App.style";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { AllRecipeData, FinderFields, RecipeData, Themes } from "./types";
import Recipes from "./pages/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import getAllRecipes from "./utils/getAllRecipes";
import enabledFilter from "./utils/enabledFilter";
import Recipe from "./components/Recipe/Recipe";

const App = () => {
  const [theme, setTheme] = React.useState<Themes>("light");
  const [allRecipes, setAllRecipes] = React.useState<AllRecipeData>([]);
  const [showRecipes, setShowRecipes] = React.useState<AllRecipeData>([]);
  const [selectedRecipe, setSelectedRecipe] = React.useState<RecipeData>([]);
  const [finderFields, setFinderFields] = React.useState<FinderFields>({
    nameSearchText: "",
    cuisineSearchText: "",
    typeSearchText: "",
    sortType: "Alphabetical",
    sortOrder: "Ascending",
  });

  React.useEffect(() => {
    getAllRecipes()
      .then((recipeData: AllRecipeData) => enabledFilter(recipeData))
      .then((enabledRecipes: AllRecipeData) => setAllRecipes(enabledRecipes));
  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <SC.GlobalStyle />
          <SC.Container>
            <Header
              theme={theme}
              setTheme={setTheme}
              allRecipes={allRecipes}
              setShowRecipes={setShowRecipes}
              finderFields={finderFields}
              setFinderFields={setFinderFields}
            />
            <SC.Page>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/recipes/:url">
                  <Recipe recipe={selectedRecipe} />
                </Route>
                <Route path="/recipes">
                  <Recipes
                    showRecipes={showRecipes}
                    setSelectedRecipe={setSelectedRecipe}
                  />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </SC.Page>
            <Footer />
          </SC.Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
