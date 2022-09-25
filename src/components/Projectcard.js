import './Projectcard.css';
import workimg from '../assets/images/work_in_progress.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Projectcard = () => {
  return (
    <>
      <div className="project-cards">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          <div className="project-card">
            <img src={workimg} alt="work in prgress text and working man" />
            <h2 className="project-title">Javascript Projects</h2>
            <div className="project-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sem erat, commodo venenatis lorem eu, lobortis ornare dolor. Ut
                consequat enim nec leo congue volutpat. Fusce eget fermentum
                magna, non.
              </p>
              <div className="pro-btns">
                <NavLink to="/projects" className="btn">
                  View
                </NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={workimg} alt="work in prgress text and working man" />
            <h2 className="project-title">Python Projects</h2>
            <div className="project-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sem erat, commodo venenatis lorem eu, lobortis ornare dolor. Ut
                consequat enim nec leo congue volutpat. Fusce eget fermentum
                magna, non.
              </p>
              <div className="pro-btns">
                <NavLink to="/projects" className="btn">
                  View
                </NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={workimg} alt="work in prgress text and working man" />
            <h2 className="project-title">Cloud Projects</h2>
            <div className="project-details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sem erat, commodo venenatis lorem eu, lobortis ornare dolor. Ut
                consequat enim nec leo congue volutpat. Fusce eget fermentum
                magna, non.
              </p>
              <div className="pro-btns">
                <NavLink to="/projects" className="btn">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
