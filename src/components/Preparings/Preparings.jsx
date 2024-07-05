import PropTypes from "prop-types";
import Prepare from "../Prepare/Prepare";

const Preparings = ({ preparings, cookingTime, totalCalories }) => {
  return (
    <div>
      <h1 className="my-5 text-xl font-semibold text-default-color text-center">
        Currently Cooking : {preparings.length}
      </h1>
      <hr className="border-[1px]"></hr>
      {preparings.map((preparing, idx) => (
        <Prepare
          key={idx}
          preparing={preparing}
          cookingTime={cookingTime}
          totalCalories={totalCalories}
        ></Prepare>
      ))}
    </div>
  );
};

Preparings.propTypes = {
  preparings: PropTypes.array,
  cookingTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Preparings;
