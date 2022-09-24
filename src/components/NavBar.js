import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Headerbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="nav-bar">
        <NavLink
          exact="true"
          to="/"
          className="brand-link"
          activeclassname="active"
        >
          Karen Robertson
        </NavLink>
        <nav className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* TODO - think about the projects link being a dropdown?
          put all the secondary navlinks in a div to move  to the right of the screen*/}
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="nav-link"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} color="#fff" />
          ) : (
            <FontAwesomeIcon icon={faBars} color="#fff" />
          )}
        </div>
      </div>
    </>
  );
};

export default Headerbar;
