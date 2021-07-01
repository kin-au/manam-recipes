import React from "react";
import * as SC from "./App.style";
import { AllRecipeData } from "./types";
import Recipes from "./pages/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import getAllRecipes from "./utils/getAllRecipes";

const App = () => {
  const [allRecipes, setAllRecipes] = React.useState<AllRecipeData>([]);
  const [showRecipes, setShowRecipes] = React.useState<AllRecipeData>([]);

  React.useEffect(() => {
    getAllRecipes().then((allRecipes: AllRecipeData) =>
      setAllRecipes(allRecipes)
    );
  }, []);

  return (
    <>
      <BrowserRouter>
        <SC.GlobalStyle />
        <SC.Container>
          <Header allRecipes={allRecipes} setShowRecipes={setShowRecipes} />
          <SC.Page>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/recipes">
                <Recipes allRecipes={allRecipes} showRecipes={showRecipes} />
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
      </BrowserRouter>
    </>
  );
};

export default App;
