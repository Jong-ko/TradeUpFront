import React from "react";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";
import LoginNav from "./LoginNav";

export default function TradeTerms() {
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
                <p>Terms and Conditions</p>
              </div>
              <div className="work  text-gray-700 mt-4">
                <p>
                  In a situation that this was a real website, users are
                  responsible for trades and how they are carried out. Anything
                  lost in mail or not completed relies on how users would like
                  to mail their items.
                </p>
                <br></br>
                <p>
                  Information that is shared via chat is on users discretion, if
                  there are signs of bullying or coercion that user will be
                  removed from Barter House website until further notice.
                </p>
                <br></br>
                <p>
                  We hope that this project helps to demonstrate all the skills
                  we have learned during or Digital Crafts Bootcamp. Thank you
                  instructors and TAs!
                </p>
                <br></br>
                <p>
                  Chats are as well saved in firebase database. To read more on
                  their privacy policies you can visit{" "}
                  <a
                    className=" cursor-pointer underline"
                    href="https://firebase.google.com/support/privacy"
                  >
                    firebase
                  </a>{" "}
                  Please read{" "}
                  <a className=" cursor-pointer underline">Privacy Policy</a>{" "}
                  and{" "}
                  <a className=" cursor-pointer underline">
                    Terms & Conditions
                  </a>
                  <br></br>
                  Good luck trading!
                </p>
              </div>
              <div className="flex pt-5 m-5 ">
                <SocialIcon
                  className="m-2"
                  url="https://github.com/Jong-ko/TradeUpFront"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
