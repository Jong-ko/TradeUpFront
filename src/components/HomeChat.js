import React from "react";
import Sidebar from "./SidebarChat";
import Chat from "./Chat";
import { AuthContextProvider } from "./AuthContext";
import { ChatContextProvider } from "./ChatContext";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <AuthContextProvider>
          <ChatContextProvider>
            <Chat />
            <Sidebar />
          </ChatContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default Home;
