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
import getRecipes from "./utils/getRecipes";

const App = () => {
  const [recipes, setRecipes] = React.useState<AllRecipeData>([]);

  React.useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <>
      <BrowserRouter>
        <SC.GlobalStyle />
        <SC.Container>
          <Header />
          <SC.Page>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/recipes">
                <Recipes recipes={recipes} />
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
