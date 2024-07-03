import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Menus from "./components/Menus/Menus";
import Recipe from "./components/Recipe/Recipe";
import Cookings from "./components/Cookings/Cookings";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cookings, setCookings] = useState([]);

  const error = (menu) => {
    toast.error(`${menu.recipe_name} cannot be added again`);
  };

  const success = (menu) => {
    toast.info(`${menu.recipe_name} successfully added!`);
  };

  const handleWantToCook = (menu) => {
    // const newCookings = [...cookings, menu];
    // setCookings(newCookings);
    // console.log(`${menu} added for cooking`);
    if (cookings.includes(menu)) {
      setCookings(cookings);
      console.log(`${menu.recipe_name} cannot be added`);

      error(menu);
    } else {
      const newCookings = [...cookings, menu];
      setCookings(newCookings);
      console.log(`${menu.recipe_name} added for cooking`);
      // success(menu);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto mt-10">
        <Banner></Banner>
        <Recipe></Recipe>
        <div className="md:lg:flex gap-5">
          <Menus handleWantToCook={handleWantToCook}></Menus>
          <Cookings cookings={cookings}></Cookings>
        </div>
      </div>
    </>
  );
}

export default App;
