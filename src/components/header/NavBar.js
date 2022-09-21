import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Headerbar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* Think about a home log here */}
        <nav className="header-wrapper">
          <div className="namepage">
            <NavLink to="/" className="brand">
              Karen Robertson's Website
            </NavLink>
          </div>
          {/* TODO - think about the projects link being a dropdown?
          put all the secondary navlinks in a div to move  to the right of the screen*/}
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            Home
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/"
          >
            About
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/"
          >
            Projects
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
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
