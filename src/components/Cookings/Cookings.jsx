import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import Preparings from "../Preparings/Preparings";

const Cookings = ({
  cookings,
  handleAddToPrepare,
  preparings,
  cookingTime,
  totalCalories,
}) => {
  return (
    <div className="w-auto md:lg:w-1/3 border rounded-2xl p-5">
      <h1 className="my-5 text-xl font-semibold text-default-color text-center">
        Want to Cook : {cookings.length}
      </h1>
      <hr className="border-[1px]"></hr>
      {cookings.map((cooking, idx) => (
        <Cooking
          key={idx}
          cooking={cooking}
          handleAddToPrepare={handleAddToPrepare}
        ></Cooking>
      ))}
      <Preparings
        preparings={preparings}
        cookingTime={cookingTime}
        totalCalories={totalCalories}
      ></Preparings>
    </div>
  );
};

Cookings.propTypes = {
  cookings: PropTypes.array,
  handleAddToPrepare: PropTypes.func,
  preparings: PropTypes.array,
  cookingTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Cookings;
