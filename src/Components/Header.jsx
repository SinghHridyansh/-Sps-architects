import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <header className="p-8 flex flex-row items-center justify-between">
        <div className="icon font-light text-left text-4xl ">
          <h1>
            SPS <br />
            <span className="tracking-widest">Architects</span>
          </h1>
        </div>

        <div className="navigation w-6/12 flex justify-between flex-row gap-">
          <span className="font-light text-2xl flex gap-2 align-center hover:font-semibold transition-all">
            <p>What We Do</p>
            <span class="material-symbols-outlined">south_east</span>
          </span>
          <span className="font-light text-2xl flex gap-2 align-center hover:font-semibold transition-all">
            <p>Who We Are</p>
            <span class="material-symbols-outlined">south_east</span>
          </span>
          <span class="material-symbols-outlined">menu</span>
        </div>
      </header> */}
      <nav
        className="relative w-full h-screen flex justify-evenly items-center"
        style={{ backgroundColor: "#59584b" }}
      >
        <div className="Nav flex items-left text-7xl font-extralight flex-col gap-10 ">
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
              <span class="material-symbols-outlined">south_east</span>
              <span>Facebook</span>
            </li>
            <li>
              <span class="material-symbols-outlined">south_east</span>
              <span>LinkedIn</span>
            </li>
            <li>
              <span class="material-symbols-outlined">south_east</span>
              <span>Instagram</span>
            </li>
            <li>
              <span class="material-symbols-outlined">south_east</span>
              <span>X</span>
            </li>
          </ul>
        </div>
        <div className="fixed right-10 top-10 text-lg">
          <span class="material-symbols-outlined font-bold ">close</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
