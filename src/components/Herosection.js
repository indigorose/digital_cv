import React from 'react';
import { Link } from 'react-router-dom';
import './Herosection.css';

const HeroSection = () => {
  return (
    <section className="content">
      <div className="container">
        <p>HI, I'M KAREN ROBERTSON</p>
        <h1>Software Engineer</h1>
        <div className="btns">
          <Link to="/projects" className="btn">
            projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
