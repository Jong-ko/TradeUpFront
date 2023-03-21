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
    <div>
      <LoginNav />
      <div className="w-full max-w-xs m-auto py-10 ">
        <form
          onSubmit={AccountLogin}
          required
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              autoComplete="on"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex-none items-center justify-between">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Login
            </button>
          </div>
        </form>
        <NavLink to="/create-account">
          <span className=" bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-purple-500">
            Don't have an account? Create an account now.
          </span>
        </NavLink>
        {errorVisible && (
          <p>
            <span style={{ color: "red" }}>Invalid email or password</span>
          </p>
        )}
        <p className="text-center absolute inset-x-0 bottom-0  text-gray-500 text-xs">
          &copy;2023 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};
