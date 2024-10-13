import React, { useState } from "react";
import "./SlidingNav.css"; // Add the necessary CSS

const SlidingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button */}
      <div
        className="fixed right-10 top-10 text-lg cursor-pointer z-40 bg-transparent"
        onClick={toggleNav}
      >
        <span className="material-symbols-outlined font-bold">
          {isOpen ? "close" : "menu"}
        </span>
      </div>

      {/* Navigation Panel */}
      <nav
        className={`relative sliding-nav w-full h-screen flex justify-evenly items-center flex-row z-50 ${
          isOpen ? "open" : "closed"
        }`}
        style={{ backgroundColor: "#59584b" }}
      >
        <div className="Nav flex items-left text-7xl font-extralight flex-col gap-10">
          <h1>HOME</h1>
          <h1>PROJECTS</h1>
          <h1>STUDIO</h1>
          <h1>CONTACT</h1>
        </div>
        <div className="p-10 text-2xl">
          <p>
            500 Terry Francine Street <br /> San Francisco, CA 94158
          </p>
          <br />
          <p>
            NFO@MYSITE.COM <br /> 123-456-7890
          </p>
          <br />
          <ul className="nav-socials">
            <li>
              <span className="material-symbols-outlined">south_east</span>
              <span>Facebook</span>
            </li>
            <li>
              <span className="material-symbols-outlined">south_east</span>
              <span>LinkedIn</span>
            </li>
            <li>
              <span className="material-symbols-outlined">south_east</span>
              <span>Instagram</span>
            </li>
            <li>
              <span className="material-symbols-outlined">south_east</span>
              <span>X</span>
            </li>
          </ul>
        </div>
        <div className="fixed right-10 top-10 text-lg cursor-pointer">
          <span
            class="material-symbols-outlined font-bold "
            onClick={toggleNav}
          >
            close
          </span>
        </div>
      </nav>
    </>
  );
};

export default SlidingNav;
