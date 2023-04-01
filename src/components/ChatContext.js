import { createContext, useEffect, useReducer } from "react";
import { useFirebaseAuth } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const currentUser = useFirebaseAuth();

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    console.log("booo boooo", currentUser, action);
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload.userId,
          chatId: action.payload.chatId,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
