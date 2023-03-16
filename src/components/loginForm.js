import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logIn, setUserAccount } from "../features/swapSlice";
import LoginNav from "./LoginNav";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AccountLogin = async (event) => {
    event.preventDefault();
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setErrorVisible(false);
          dispatch(logIn());
          dispatch(setUserAccount(email));
          navigate("/profile");
        } else {
          setErrorVisible(true);
        }
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <LoginNav />
      <form onSubmit={AccountLogin} required>
        <div className="mb-3">
          <p>Login</p>
          <label className="handwriting-text"> Email</label>
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="handwriting-text">Password</label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <button type="submit">Login</button>
        </div>
      </form>
      <NavLink to="/create-account">
        <span>Don't have an account? Create an account now</span>
      </NavLink>
      {errorVisible && (
        <p>
          <span style={{ color: "red" }}>Invalid email or password</span>
        </p>
      )}
    </div>
  );
};
