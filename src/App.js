import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemBrowsePage from './components/itemBrowsePage';
import { Login } from './components/loginForm';
import { CreateAccount } from './components/CreateAccount';
import { Protected } from './components/Protected';
import { selectIsLoggedIn } from './features/swapSlice';
import { useSelector } from 'react-redux';
import './App.css';
import UserPage from './components/userPage';
import Offers from './components/Offers';
import Home from './components/HomeChat';
import './style.scss';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TradeTerms from './components/TradeTerms';
import BarterRules from './components/BarterRules';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div
      className=" h-full"
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
                <Route path="/rules" element={<BarterRules />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TradeTerms />} />
                <Route path="/chat" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                {/* Route for offers page */}
                <Route path="/offers" element={<Offers />} />
                {/* START Route For Item Browsing */}
                <Route
                  path="/BrowseClothingandAccessories"
                  element={
                    <ItemBrowsePage catagory={'Clothing and Accessories'} />
                  }
                />
                <Route
                  path="/BrowseElectronicsandGadgets"
                  element={
                    <ItemBrowsePage catagory={'Electronics and Gadgets'} />
                  }
                />
                <Route
                  path="/BrowseHomeandFurniture"
                  element={<ItemBrowsePage catagory={'Home and Furniture'} />}
                />
                <Route
                  path="/BrowseHealthandBeauty"
                  element={<ItemBrowsePage catagory={'Health and Beauty'} />}
                />
                <Route
                  path="/BrowseSportsandOutdoors"
                  element={<ItemBrowsePage catagory={'Sports and Outdoors'} />}
                />
                <Route
                  path="/BrowseToysandGames"
                  element={<ItemBrowsePage catagory={'Toys and Games'} />}
                />
                {/* END Route For Item Browsing */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
