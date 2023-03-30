import React from "react";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";
import LoginNav from "./LoginNav";

export default function PrivacyPolicy() {
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
                <p>Privacy Policy</p>
              </div>
              <div className="work  text-gray-700 mt-4">
                <p>
                  This website is a part of our Capstone Project and is not
                  meant to be used in a serious manner. All code is to the
                  public and can be looked at for reference.
                </p>
                <br></br>
                <p>
                  Data that is created when you open an account is saved to AWS
                  as well as firebase database.
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
