import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

const Menu = ({ menu, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = menu;

  return (
    <div className="border rounded-2xl p-10">
      <img className="w-3/4 rounded-2xl" src={recipe_image} alt={recipe_name} />
      <h1 className="my-5 text-xl font-semibold text-default-color">
        {recipe_name}
      </h1>
      <p className="text-base font-normal text-default-color opacity-70 mb-3">
        {short_description}
      </p>
      <hr className="border-[1px]"></hr>
      <h3 className="my-5 text-lg font-medium text-default-color">
        Ingredients: {ingredients.length}
      </h3>
      <div className="text-lg font-normal text-default-color opacity-70 mb-4">
        {ingredients.map((ingredient, idx) => (
          <p key={idx}>{ingredient}</p>
        ))}
      </div>

      <hr className="border-[1px]"></hr>

      <div className="my-5 flex gap-3">
        <IoTimeOutline />
        <p className=" text-base font-normal">{preparing_time}</p>

        <AiOutlineFire />
        <p className="text-base font-normal">{calories}</p>
      </div>

      <button
        onClick={() => handleWantToCook(menu)}
        className="btn btn-primary text-lg font-medium bg-green-400 text-default-color"
      >
        Want To Cook
      </button>
      <ToastContainer />
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func,
};

export default Menu;
