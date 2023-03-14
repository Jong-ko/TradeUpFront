import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import App from "./App"
import Login from "./components/login";
import UserPage from "./components/userPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route element = {<App/>} path="/" exact />
          <Route element = {<Login/>} path="/login" />
          <Route element = {<UserPage/>} path="/Profile" />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
