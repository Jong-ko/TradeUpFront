import React from "react";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";
import LoginNav from "./LoginNav";

export default function BarterRules() {
  return (
    <div>
      <div>
        <LoginNav />
        <div className="h-full ">
          <div className="place-items-center grid h-auto pt-56 pb-32">
            <div className="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl lg:max-w-5xl xs:m-5 sm:max-w-sm">
              <div class="profile mx-auto rounded-full py-2">
                <img
                  className="rounded-full max-h-40"
                  src="/barterlogo.jpg"
                  alt="profile"
                />
              </div>
              <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Barter House</p>
              </div>
              <div className="work  text-gray-700 mt-4">
                <p>
                  Have old or unused items lying around the house? Not worth
                  enough to sell but maybe enough to trade with? Ever heard of
                  the famous story of Kyle MacDonald? He traded his way from
                  just one red paperclip all the way up to a house. MacDonald
                  was inspired by the childhood game Bigger, Better and
                  hopefully this website inspires you to find your "red paper
                  clip" in Barter House.
                </p>
                <br></br>
                <p>
                  Here you will be able to offer one item, and be able to pick
                  among all the categories on our website to choose other users
                  items you would like to trade for. Offers page is filled will
                  offers from other users, offers pending, and offers you have
                  sent to other users.
                </p>
                <br></br>
                <p>
                  Your Profile is where you are able to create the item you want
                  to trade and will update once trade has been finalized between
                  both users.
                </p>
                <br></br>
                <p>
                  You are also able to chat with other users to finalize the
                  trade! Please read{" "}
                  <a href="/privacy" className=" cursor-pointer underline">
                    Privacy Policy
                  </a>
                  and
                  <a href="/terms" className=" cursor-pointer underline">
                    Terms & Conditions
                  </a>
                  <br></br>
                  Good luck trading!
                </p>
              </div>
              <div className="flex pt-5 m-5 ">
                <SocialIcon
                  className="m-2"
                  url="https://www.linkedin.com/in/thomas-lee-43483829/"
                />
                <SocialIcon className="m-2" url="https://github.com/Jong-ko" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
