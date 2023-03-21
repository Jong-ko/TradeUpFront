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
      </ul>
    </div>
  );
}

export default LoginNav;
