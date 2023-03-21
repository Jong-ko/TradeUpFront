import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/loginForm';
import { CreateAccount } from './components/CreateAccount';
import { Protected } from './components/Protected';
import { selectIsLoggedIn } from './features/swapSlice';
import { useSelector } from 'react-redux';
import './App.css';
import UserPage from './components/userPage';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div
      className=" h-screen"
      style={{
        backgroundImage: `url(
          https://www.toptal.com/designers/subtlepatterns/uploads/cubes.png
        )`,
      }}
    >
      <BrowserRouter>
        <div className="d-flex justify-content-center ">
          <div>
            <div>
              <Routes>
                <Route
                  path="/profile"
                  element={
                    <Protected isLoggedIn={isLoggedIn}>
                      <UserPage />
                    </Protected>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
