import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAllItems, selectUserAccount } from "../features/swapSlice";


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

    const userAccount = useSelector(selectUserAccount);
    console.log(userAccount)

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
          </li>
       
         <li style={{float:"right"}} >
                <NavLink to="/"><a>Logout</a></NavLink>
            </li>
        </ul>
    </div>
  );
}

export default Navbar;
