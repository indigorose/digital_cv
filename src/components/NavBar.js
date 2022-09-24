import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Headerbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColour = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColour);

  return (
    <>
      <nav className={color ? 'nav-bar-bg' : 'nav-bar'}>
        <NavLink
          exact="true"
          to="/"
          className="brand-link"
          activeclassname="active"
        >
          Karen Robertson
        </NavLink>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="nav-link"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassname="active"
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* TODO - think about the projects link being a dropdown?
          put all the secondary navlinks in a div to move  to the right of the screen*/}

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} color="#000" />
          ) : (
            <FontAwesomeIcon icon={faBars} color="#000" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Headerbar;
