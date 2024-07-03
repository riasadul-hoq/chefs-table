import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Menus = ({ handleWantToCook }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menus.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div className="w-auto md:lg:w-2/3 grid grid-cols-1 md:lg:grid-cols-2 gap-5 mb-5">
      {/* <h1 className="text-4xl">Menus: {Menus.length}</h1> */}
      {menus.map((menu, idx) => (
        <Menu key={idx} menu={menu} handleWantToCook={handleWantToCook}></Menu>
      ))}
    </div>
  );
};

Menus.propTypes = {
  handleWantToCook: PropTypes.func,
};

export default Menus;
