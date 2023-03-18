import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/loginForm';
import { CreateAccount } from './components/CreateAccount';
import { Protected } from './components/Protected';
import { selectIsLoggedIn, selectUserAccount } from './features/swapSlice';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import UserPage from './components/userPage';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userAccount = useSelector(selectUserAccount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <BrowserRouter>
        <div fluid="xs">
          <div>
            <div className="d-flex justify-content-center mt-3"></div>
          </div>
          <div>
            <div className="d-flex justify-content-center mt-3">
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
