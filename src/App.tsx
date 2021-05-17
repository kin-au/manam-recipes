import { GlobalStyle } from "./App.style";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  const getRecipes = () => {
    fetch("./recipes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((recipes) => console.log(recipes));
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  );
};

export default App;
