import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed p-6 top-00 left-0 w-full h-28 flex justify-center items-center z-40 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx=auto flex justify-between items-center md:px-2 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <div className="icon font-light text-left text-xl leading-6">
          <Link to="/" className="logo text-project-yellow">
            SPS <br />
            <span className="tracking-widest">Architects</span>
            {/* <img
              src="./Assets/SPS-logo.png"
              alt=""
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              height={100}
              width={100}
            /> */}
          </Link>
        </div>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
          >
            <span class="material-symbols-outlined">
              {" "}
              {navOpen ? "close" : "menu"}
            </span>
            {/* <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span> */}
          </button>

          <NavBar navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>

        <Link
          to="/contact"
          className="btn bg-project-yellow text-black max-md:hidden md:justify-self-end"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header2;
