import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserAccount } from "../features/swapSlice";
import { logOut } from "../features/swapSlice";

function Navbar() {
  const userAccount = useSelector(selectUserAccount);
  const dispatch = useDispatch();

  console.log(userAccount);

  const accountLogOut = async () => {
    await fetch("/logout")
      .then((response) => response.json())
      .then((json) => {
        if (json.isLoggedIn) {
          console.log("Still logged in");
        } else {
          dispatch(logOut());
        }
      });
  };

  return (
    <div className="navWrapper">
      <ul>
        <li>
          <NavLink to="/profile">
            <a>Profile</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <a>Items for Trade</a>
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

        <li style={{ float: "right" }}>
          <NavLink to="/" onClick={accountLogOut}>
            <a>Logout</a>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
