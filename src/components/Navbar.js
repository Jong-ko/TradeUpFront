import React from "react";

import { NavLink } from "react-router-dom";



function Navbar() {

    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // const userAccount = useSelector(selectUserAccount);
    // const dispatch = useDispatch();
    
    // const accountLogOut = async () => {
    //   await fetch("/logout")
    //       .then(response => response.json())
    //       .then((json) => {
    //           if(json.isLoggedIn) {
    //               console.log("Still logged in");
    //           } else {
    //               dispatch(logOut());
    //           }
    //       });
    // }

  return (
    <div className="navWrapper">
        <ul>
          <li>
            <NavLink to="/profile"><a >Profile</a></NavLink> 
          </li>
          <li>
            <NavLink  to="" ><a  >Items for Trade</a></NavLink>
          </li>    
      
          <li className="dropdown" >    
          <a className="dropbtn" style={{padding:"16px"}}>Categories</a>
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

export default Navbar;
