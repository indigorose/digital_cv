import './Aboutcv.css';
import profilepic from '../assets/images/profile_picture.jpeg';

import React from 'react';

const Aboutcv = () => {
  return (
    <>
      <div id="container--main">
        <section id="wrapper--hero" class="section--page">
          <img
            id="profile-pic"
            src={profilepic}
            alt="Karen Robertson, profile"
          />
          <div>
            <h1 id="user-name">Karen Robertson</h1>
            <p id="bio">
              A software developer with skills in HTML, Javascript, Python and
              CSS.{' '}
            </p>
          </div>
        </section>
        <section class="section--page">
          <div id="socials--list">
            <a href="{home}" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </section>
        <section class="section--page">
          <h2>Skills and qualifications</h2>
          <ul id="qualifications--list">
            <li>🟣 What are your skills and qualifications</li>
          </ul>
        </section>
        <section class="section--page">
          <h2>Tech stack</h2>

          <div id="wrapper--techstack__items">
            <div class="card--techstack">
              <span>Python, JavaScript</span>
            </div>
            <div class="card--techstack">
              <span>Django</span>
            </div>
            <div class="card--techstack">
              <span>React</span>
            </div>
            <div class="card--techstack">
              <span>HTML, CSS</span>
            </div>
          </div>
        </section>
        <section class="section--page">
          <h2>Projects & Accomplishments</h2>

          <div class="card--project">
            <a href="project.html">
              <span>🏆 </span>Python Project lab
            </a>
          </div>

          <div class="card--project">
            <a href="project.html">
              <span>🏆 </span>Javascript project
            </a>
          </div>

          <div class="card--project">
            <a href="project.html">
              <span>🏆 </span>html project
            </a>
          </div>
        </section>
        <section class="section--page" id="work-history-wrapper">
          <h2>Work History</h2>
          <div class="line-break"></div>
          <div class="card--work-history">
            <strong>Faculty Adminstrator</strong>
            <p>11/2019 - Present</p>
            <p>Tasks and history</p>
            <ul>
              <li>specifics what did you do?</li>
            </ul>
          </div>
          <div class="line-break"></div>
          <div class="card--work-history">
            <strong>Account Adminstrator</strong>
            <p>10/2017 - 11/2019</p>
            <p>Tasks and history</p>
            <ul>
              <li>specifics what did you do?</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutcv;
