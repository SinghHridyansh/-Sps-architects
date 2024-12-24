import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ navOpen, setNavOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    // console.log(lastActiveLink.current);
    // console.log(activeBox.current);
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";

    setNavOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      link: "/",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Studio",
      link: "/studio",
      className: "nav-link",
    },
    // {
    //   label: "Work",
    //   link: "/work",
    //   className: "nav-link",
    // },

    {
      label: "Contact",
      link: "/contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          to={link}
          key={key}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {/* <a
          href={link}
          key={key}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
          > */}
          {label}
          {/* </a> */}
        </Link>
      ))}

      {/* <a href="#contact" className={className}>
        Contact
      </a> */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

NavBar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default NavBar;
