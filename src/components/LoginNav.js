import React from "react";


import { NavLink } from "react-router-dom";

function LoginNav() {



  return (
    <div className="navWrapper">
      <ul>
        <li>
          <NavLink to="/about">
            <a>About Our Team</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <a> How to Barter </a>
          </NavLink>
        </li>

        <li className="dropdown">
          <a className="dropbtn" style={{ padding: "16px" }}>
            Categories
          </a>
          <div className="dropdown-content">
            <a>Clothing and Accessories</a>
            <a>Electronics and Gadgets</a>
            <a>Home and Furniture</a>
            <a>Health and Beauty</a>
            <a>Sports and Outdoors</a>
            <a>Toys and Games</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LoginNav;
