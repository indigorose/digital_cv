import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faHome,
  faLayerGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
          {/* TODO - think about the projects link being a dropdown? */}
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
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            About
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="project-link"
            to="/"
          >
            <FontAwesomeIcon icon={faLayerGroup} color="#4d4d4e" />
            Projects
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/"
          >
            <FontAwesomeIcon icon={faContactCard} color="#4d4d4e" />
            Contact
          </NavLink>
        </nav>
      </div>
      ;
    </>
  );
};

export default Headerbar;
