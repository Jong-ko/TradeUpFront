import React from "react";

import { NavLink } from "react-router-dom";

function LoginNav() {
  return (
    <div className="fixed shadow-md py-5 z-50 w-full px-5 flex justify-between items-center bg-slate-900 p-2">
      <ul className="flex sm:text-xl items-center  xs:space-x-1 xl:space-x-2 md:space-x-2 ls:space-x-2  space-x-4">
        <li>
          <a href="/profile" class="flex items-center ">
            <img
              src="/barterlogo.jpg"
              className="m-1 pb-1  h-14 rounded-full"
              alt="Barter House Logo"
            />
          </a>
        </li>
        <li>
          <NavLink to="/about">
            <a className="text-stone-100 hover:text-sky-300">About Our Team</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/rules">
            <a className="text-stone-100 hover:text-sky-300"> How to Barter </a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <a className="text-stone-100 hover:text-sky-300"> Login </a>
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
