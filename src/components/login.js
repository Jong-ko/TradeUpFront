import React, { useState } from "react";
import LoginForm from "./loginForm";
import Navbar from "./Navbar";
import UserPage from "./userPage";

const Login = () => {
  const adminUser = {
    firstName: "Kristina",
    lastName: "Giannoutsos",
    email: "bob@gmail.com",
    password: "123",
  };

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const LoginUser = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        password: details.password,
      });
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div id="login-box">
      {user.email !== "" ? (
        <div>
            <Navbar/>
          <button style={{ top:"12px", right: "5px", position: "absolute" }} onClick={Logout}>
            Logout
          </button>
          <h2>
            Welcome <span>{user.firstName}</span>
          </h2>
          <UserPage />
        </div>
      ) : (
        <LoginForm LoginUser={LoginUser} error={error} />
      )}
    </div>
  );
};

export default Login;
