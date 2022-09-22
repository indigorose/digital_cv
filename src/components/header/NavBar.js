import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Headerbar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* Think about a home log here */}
        <nav className="header-wrapper">
          <NavLink to="/" className="brand-link">
            Karen Robertson's Website
          </NavLink>
          {/* TODO - think about the projects link being a dropdown?
          put all the secondary navlinks in a div to move  to the right of the screen*/}
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/"
          >
            About
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/"
          >
            Projects
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/"
          >
            Contact
          </NavLink>
        </nav>
      </div>
      ;
    </>
  );
};

export default Headerbar;
