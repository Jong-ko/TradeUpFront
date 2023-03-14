import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from './components/LoginForm';
import {CreateAccount} from "./components/CreateAccount";
import {Protected} from "./components/Protected"
import { selectIsLoggedIn, logOut, selectUserAccount } from './features/swapSlice';
import { useSelector, useDispatch } from 'react-redux';
import "./App.css";
import UserPage from "./components/userPage";
import Navbar from "./components/Navbar";


function App() {

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userAccount = useSelector(selectUserAccount);
  const dispatch = useDispatch();
  
  const accountLogOut = async () => {
    await fetch("/logout")
        .then(response => response.json())
        .then((json) => {
            if(json.isLoggedIn) {
                console.log("Still logged in");
            } else {
                dispatch(logOut());
            }
        });
      }
      
  return (
    <div className="App">
      <BrowserRouter>
      <div fluid="xs">
        <div>
        <Navbar bg="light" variant="light">
            <div className="mx-3 ms-auto">
              <span className="nav-container folder-label" onClick={accountLogOut}>Logout</span>
            </div>
        </Navbar>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-3"></div>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-3">
            <Routes>
              <Route path="/profile" element={
            
                  <UserPage />
             
              } />
              <Route path="/login" element={
                
                  <Login />
              } />
              <Route path="/create-account" element={
                  <CreateAccount />
              } />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter> 
    </div>
  );
}

export default App;
