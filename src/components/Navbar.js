import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserAccount } from "../features/swapSlice";
import { logOut } from "../features/swapSlice";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Navbar() {
  const userAccount = useSelector(selectUserAccount);
  const dispatch = useDispatch();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
    <div className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <ul className="flex  space-x-4 ">
        <li>
          <NavLink to="/profile">
            <a className="text-stone-100 hover:text-sky-300">Profile</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <a className="text-stone-100 hover:text-sky-300">Items for Trade</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers">
            <a className="text-stone-100 hover:text-sky-300">Offers</a>
          </NavLink>
        </li>

        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-stone-100 hover:text-sky-300">
                Categories
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <NavLink to="/BrowseClothingandAccessories">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Clothing and Accessories
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>

                  <NavLink to="/BrowseElectronicsandGadgets">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Electronics and Gadgets
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>

                  <NavLink to="/BrowseHomeandFurniture">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Home and Furniture
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>

                  <NavLink to="/BrowseHealthandBeauty">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Health and Beauty
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>

                  <NavLink to="/BrowseSportsandOutdoors">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Sports and Outdoors
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>

                  <NavLink to="/BrowseToysandGames">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Toys and Games
                        </a>
                      )}
                    </Menu.Item>
                  </NavLink>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <li className=" flex-wrap. absolute top-7 right-4 ">
          <NavLink to="/" onClick={accountLogOut}>
            <a className=" text-stone-100 hover:text-sky-300">Logout</a>
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;
