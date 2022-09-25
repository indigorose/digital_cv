import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faCodepen,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="mail">
              <h4>
                <FontAwesomeIcon icon={faEnvelope} color="#fff" /> Email
              </h4>
            </div>
            <div className="github">
              <h4>
                <FontAwesomeIcon icon={faGithub} color="#fff" /> GitHub
              </h4>
            </div>
            <div className="codepen">
              <h4>
                <FontAwesomeIcon icon={faCodepen} color="#fff" /> Codepen
              </h4>
            </div>
            <div className="twitter">
              <h4>
                <FontAwesomeIcon icon={faTwitter} color="#fff" /> Twitter
              </h4>
            </div>
            <div className="linkedin">
              <h4>
                <FontAwesomeIcon icon={faLinkedin} color="#fff" /> Linkedin
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
        </div>
      </section>
    </>
  );
};

export default Footer;
