import React from "react";
import Search from "./Search";
import Chats from "./Chats";
import NavbarChat from "./NavbarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavbarChat />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
