import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginNav from "./LoginNav";
import { logIn, setUserAccount } from "../features/swapSlice";
import { useDispatch } from "react-redux";

export const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        firstName: firstName,
        lastName: lastName,
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
          navigate("/");
        } else {
          setErrorVisible(true);
        }
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <LoginNav />
      <div className="w-full max-w-xs m-auto pt-10 sm:pt-32 xs:pt-40 lg:pt-56 ">
        <form
          onSubmit={AccountCreate}
          required
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="Jeremy"
              type="name"
              autoComplete="name"
              value={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="Ongko"
              type="name"
              autoComplete="name"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
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
              placeholder="jeremyongko123"
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
              Create an Account.
            </button>
          </div>
        </form>

        {errorVisible && (
          <p>
            <span style={{ color: "red" }}>Invalid email or password</span>
          </p>
        )}
      </div>
      <NavLink to="/">
        <span className=" bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-purple-500">
          Already Have an account? Login now.
        </span>
      </NavLink>
      {errorVisible && (
        <p>
          <span style={{ color: "red" }}>Invalid username or password</span>
        </p>
      )}
      <p className="text-center absolute inset-x-0 bottom-0  text-gray-500 text-xs">
        &copy;2023 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};
