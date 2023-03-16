import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginNav from "./LoginNav";
import { logIn, setUserAccount } from "../features/swapSlice";
import { useDispatch } from "react-redux";

export const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AccountCreate = async (event) => {
    console.log("in create account");
    event.preventDefault();
    await fetch("/create_account", {
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
          console.log("Success:", data);
          setErrorVisible(false);
          dispatch(logIn());
          dispatch(setUserAccount(email));
          setEmail("");
          setPassword("");
          navigate("/profile");
        } else {
          setErrorVisible(true);
        }
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <LoginNav />
      <form onSubmit={AccountCreate} required>
        <div className="createAccount">
          <p>Creat An Account</p>
        </div>
        <div className="mb-3">
          <label className="handwriting-text">Email</label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            placeholder="Email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="handwriting-text">Password</label>
          <input
            id="user-input"
            type="password"
            placeholder="Password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="createAccount-btn" type="submit">
          Submit
        </button>
      </form>
      <NavLink to="/">Already have an Account?</NavLink>
      {errorVisible && (
        <p>
          <span style={{ color: "red" }}>Invalid username or password</span>
        </p>
      )}
    </div>
  );
};
