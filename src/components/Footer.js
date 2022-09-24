import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FontAwesomeIcon icon={faHome} color="#000" />
            </div>
            <p>London</p>
            <div className="mail">
              <h4>
                <FontAwesomeIcon icon={faEnvelope} color="#000" />
                Email
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>About me</h4>
            <p>
              A web developer from London, UK. I enjoy building new projects
              using new technologies and all things pop culture.
            </p>
          </div>
          <div className="social">
            <FontAwesomeIcon icon={faTwitter} color="#000" size="xl" />
            <FontAwesomeIcon icon={faLinkedin} color="#000" size="xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
