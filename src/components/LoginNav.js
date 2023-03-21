import React from "react";

import { NavLink } from "react-router-dom";

function LoginNav() {
  return (

    <div className="flex items-center justify-between flex-wrap bg-slate-900 m-auto p-6">
      <ul className="flex space-x-4 ">
        <li>
          <NavLink to="/about">
            <a className="text-stone-100 hover:text-sky-300">About Our Team</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="">

            <a className="text-stone-100 hover:text-sky-300"> How to Barter </a>
          </NavLink>
        </li>

        {/* <li className="dropdown">
          <a className="dropbtn" style={{ padding: "16px" }}>
            Categories
          </a>
          <div className="dropdown-content">
            <NavLink to="/BrowseClothingandAccessories">
              <div>Clothing and Accessories</div>
            </NavLink>
            <NavLink to="/BrowseElectronicsandGadgets">
            <div>Electronics and Gadgets</div>
            </NavLink>
            <NavLink to="/BrowseHomeandFurniture">
            <div>Home and Furniture</div>
            </NavLink>
            <NavLink to="/BrowseHealthandBeauty">
            <div>Health and Beauty</div>
            </NavLink>
            <NavLink to="/BrowseSportsandOutdoors">
            <div>Sports and Outdoors</div>
            </NavLink>
            <NavLink to="/BrowseToysandGames">
            <div>Toys and Games</div>
            </NavLink>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default LoginNav;
