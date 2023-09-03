import React from "react";
import Logo from "./logo";

export default function Menu() {
  return (
    <>
      <div className="text-white flex justify-between">
        <div className="my-auto">
          <Logo />
        </div>

        <div className="flex">
          <div className="flex">
            <div className="menu-div">
              <h3 className="menu-text font-poppins">Why giffgaff</h3>
            </div>
            <div className="menu-div">
              <h3 className="menu-text">Our offer</h3>
            </div>
            <div className="menu-div">
              <h3 className="menu-text">Community</h3>
            </div>
            <div className="menu-div">
              <h3 className="menu-text">Help</h3>
            </div>
          </div>

          {/*------ user section--------- */}
          <div className="flex  hover:bg-white hover:text-black  h-full py-3 cursor-pointer  w-40 px-4   ">
            <div className="w-8 h-8">
              <svg
                alt="avatar icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
              >
                <path
                  d="M75 2.4a44.5 44.5 0 1044.5 44.5A44.47 44.47 0 0075 2.4m0 77.1c-14.6 0-26.8-10.7-30-23.8h60c-3.2 13.1-15.4 23.8-30 23.8m43.3 50.3c-1.6-13.8-10.3-25.5-19.4-34.3A54.83 54.83 0 0175 101a54.07 54.07 0 01-23.8-5.5c-9.2 8.8-17.9 20.5-19.4 34.3a48.93 48.93 0 00-.3 7.5A94 94 0 0075 147.6a94 94 0 0043.5-10.3 38.38 38.38 0 00-.2-7.5"
                  fill="#fcc31e"
                ></path>
              </svg>
            </div>

            <h3 className="menu-text ">My giffgaf</h3>
          </div>
        </div>
      </div>
    </>
  );
}
