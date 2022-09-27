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
              <a
                href="mailto:robertson.k.l.a@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <h4>
                  <FontAwesomeIcon icon={faEnvelope} color="#fff" />
                </h4>
              </a>
            </div>
            <div className="github">
              <a
                href="http://github.com/indigorose"
                target="_blank"
                rel="noreferrer"
              >
                <h4>
                  <FontAwesomeIcon icon={faGithub} color="#fff" />
                </h4>
              </a>
            </div>
            <div className="codepen">
              <a
                href="https://codepen.io/indigorose"
                target="_blank"
                rel=" noreferrer"
              >
                <h4>
                  <FontAwesomeIcon icon={faCodepen} color="#fff" />
                </h4>
              </a>
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/Coding_Indigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FontAwesomeIcon icon={faTwitter} color="#fff" />
                </h4>
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/karen-robertson-06958910a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <FontAwesomeIcon icon={faLinkedin} color="#fff" />
                </h4>
              </a>
            </div>
          </div>
          <div className="right">
            <h4>About me</h4>
            <p className="footer-about">
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
