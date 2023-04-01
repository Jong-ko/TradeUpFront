import React, { useRef } from "react";
import { useFirebaseAuth } from "./AuthContext";

const Message = ({ message }) => {
  const currentUser = useFirebaseAuth();

  const ref = useRef();

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message && <img src={message} alt="" />}
      </div>
    </div>
  );
};

export default Message;
