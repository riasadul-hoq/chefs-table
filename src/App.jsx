import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto mt-10">
        <Banner></Banner>
        <Recipe></Recipe>
        <Menus></Menus>
      </div>
    </>
  );
}

export default App;
