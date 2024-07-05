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
  const [preparings, setPreparings] = useState([]);
  const [cookingTime, setCookingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const error = (menu) => {
    toast.error(`${menu.recipe_name} cannot be added again`);
  };

  // const success = (menu) => {
  //   toast.info(`${menu.recipe_name} successfully added!`);
  // };

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

  const handleAddToPrepare = (id, menu, time, calorie) => {
    const removeFromCooking = cookings.filter(
      (cooking) => cooking.recipe_id !== id
    );
    setCookings(removeFromCooking);
    console.log(`${id} removed`);

    setCookingTime(cookingTime + parseInt(time));
    console.log(`${parseInt(time)} added`);
    setTotalCalories(totalCalories + parseInt(calorie));
    console.log(`${parseInt(calorie)} added`);

    const newPreparings = [...preparings, menu];
    setPreparings(newPreparings);
    console.log(`${menu.recipe_name} added for preparing`);
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto mt-10">
        <Banner></Banner>
        <Recipe></Recipe>
        <div className="md:lg:flex gap-5">
          <Menus handleWantToCook={handleWantToCook}></Menus>

          <Cookings
            cookings={cookings}
            handleAddToPrepare={handleAddToPrepare}
            cookingTime={cookingTime}
            totalCalories={totalCalories}
            preparings={preparings}
          ></Cookings>
        </div>
      </div>
    </>
  );
}

export default App;
