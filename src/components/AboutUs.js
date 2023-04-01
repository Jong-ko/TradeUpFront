import React from "react";
import Footer from "./Footer";
import { SocialIcon } from "react-social-icons";
import LoginNav from "./LoginNav";

function AboutUs() {
  return (
    <div className=" h-full ">
      <LoginNav />

      <div>
        <div className="pb-60  place-items-center sm:pt-32 xs:pt-40 lg:pt-56 flex flex-wrap ">
          <div className="card xs:m-5 sm:m-5 md:m-5 lg:m-auto mx-auto  bg-white flex flex-col items-center  p-4 shadow-lg rounded-2xl max-w-md">
            <div class="profile mx-auto sm:p-5 xs:m-5  rounded-full py-2">
              <img
                className="rounded-full max-h-40"
                src="/Thomas.jpg"
                alt="profile"
              />
            </div>
            <div className="name text-gray-800 text-2xl font-medium mt-4 ">
              <p>Thomas Lee</p>
            </div>
            <div className="work  text-gray-700 mt-4">
              <p>
                The Scrum Master for the Barter House Project, Thomas is
                currently working as a database administrator and hopes to
                leverage his experience as a full stack developer. A resident of
                Lawrenceville, GA, Thomas spends his free time with his family.
                Thomas enjoys hiking and spending time outdoors when he is away
                from his computer.
              </p>
            </div>
            <div className="flex pt-5 m-5 ">
              <SocialIcon
                className="m-2"
                url="https://www.linkedin.com/in/thomas-lee-43483829/"
              />
              <SocialIcon className="m-2" url="https://github.com/0xkianu" />
            </div>
          </div>
          <div className="card sm:m-5 xs:m-5  lg:m-auto mx-auto  bg-white flex flex-col items-center  p-4 shadow-lg rounded-2xl max-w-md">
            <div class="profile mx-auto rounded-full py-2">
              <img className=" max-h-40" src="/Song.png" alt="profile" />
            </div>
            <div className="name text-gray-800 text-2xl font-medium mt-4 ">
              <p>Kristina Song</p>
            </div>
            <div className="work  text-gray-700 mt-4">
              <p>
                Frontend developer and UX/UI designer for Barter House Project.
                Previously a Montessori teacher and currently switching over to
                the tech field. Kristina's favorite part about developing is the
                ability to take an idea and have it come to life through
                collaboration, trial and error, and research. These are all
                qualities she would like to see continued in her future job.
                Kristina is from Chicago and live with my small mixed lab
                dachshund baby and husband. She likes sewing and creating
                children's books in her free time!
              </p>
            </div>
            <div className="flex pt-5 m-5 ">
              <SocialIcon
                className="m-2"
                url="https://www.linkedin.com/in/kristina-song/"
              />
              <SocialIcon className="m-2" url="https://github.com/knsong1" />
            </div>
          </div>
          <div className="card sm:m-5 xs:m-5  lg:m-auto mx-auto  bg-white flex flex-col items-center  p-4 shadow-lg rounded-2xl max-w-md">
            <div class="profile mx-auto rounded-full py-2">
              <img
                className="rounded-full max-h-40"
                src="/Jeremy.jpeg"
                alt="profile"
              />
            </div>
            <div className="name text-gray-800 text-2xl font-medium mt-4 ">
              <p>Jeremy Ongko</p>
            </div>
            <div className="work  text-gray-700 mt-4">
              <p>
                Frontend Developer and Project Manager for Barter House Project.
                Full Stack Web developer with a desire to continuously grow and
                expand his skills. Jeremy is currently a Product Photographer
                that is driven to combine new technologies to make efficient and
                effective workflows. What drives Jeremy is his passion to create
                things with his hands. Whether it is something tangible or
                digital, and in the process, creating connections and
                relationships. Outside of work he enjoys finding new music,
                snowboarding, and cooking.
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
  );
}

export default AboutUs;
