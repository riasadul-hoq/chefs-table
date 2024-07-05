import PropTypes from "prop-types";

const Prepare = ({ preparing, cookingTime, totalCalories }) => {
  const { recipe_name, preparing_time, calories } = preparing;
  return (
    <div>
      <table className="text-base font-normal text-default-color opacity-70 m-5">
        <tr className="text-left">
          <td></td>
          <td>Name</td>
          <td>Time</td>
          <td>Calories</td>
          <td></td>
        </tr>
        <br></br>
        <tr className="bg-slate-100">
          <td className="pr-5">1</td>
          <td className="pr-5">{recipe_name}</td>
          <td className="pr-5">{preparing_time}</td>
          <td className="pr-5">{calories}</td>
        </tr>
        <br></br>
        <tr className="text-lg font-medium text-default-color">
          <td className="pr-5"></td>
          <td className="pr-5"></td>
          <td className="pr-5">Total Time = {cookingTime} mins</td>
          <td className="pr-5">Total Calories = {totalCalories} calories</td>
        </tr>
      </table>
    </div>
  );
};

Prepare.propTypes = {
  preparing: PropTypes.array,
  cookingTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default Prepare;
