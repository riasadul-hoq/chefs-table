import PropTypes from "prop-types";
import { useState } from "react";

const Cooking = ({ cooking }) => {
  const { recipe_name, preparing_time, calories } = cooking;
  //   const [number, setNumber] = useState(1);
  //   const increment = () => {
  //     setNumber(number + 1);
  //   };

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
          <td>
            <button className="btn btn-primary text-lg font-medium bg-green-400 text-default-color">
              Preparing{" "}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.object,
};

export default Cooking;
