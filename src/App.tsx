import React from "react";
import * as SC from "./App.style";
import { RecipeData } from "./types";
import Recipes from "./pages/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [recipes, setRecipes] = React.useState<RecipeData>([]);

  const getRecipes = (): Promise<RecipeData> => {
    return fetch("./recipes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        return response.recipes;
      });
  };

  React.useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <>
      <BrowserRouter>
        <SC.GlobalStyle />
        <SC.Container>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SC.Container>
      </BrowserRouter>
    </>
  );
};

export default App;
