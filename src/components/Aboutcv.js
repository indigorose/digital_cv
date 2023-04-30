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
              A software developer with skills in Javascript, Python, HTML and
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
            <li>🟣 BA(Hons) Economics</li>
            <li>🟣 Profienct in Microsoft Office.</li>
            <li>🟣 Active team member with self-drive and motivation.</li>
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
              <li>
                Build logical and accessible administrative systems for
                departments to ensure departmental information is kept up to
                date and accessible;
              </li>
              <li>
                Organise departmental seminars, special lectures, events and
                conferences in liaison with Heads of Department and the Faculty
                Events Coordinator;
              </li>
            </ul>
          </div>
          <div class="line-break"></div>
          <div class="card--work-history">
            <strong>Account Adminstrator</strong>
            <p>10/2017 - 11/2019</p>
            <p>Tasks and history</p>
            <ul>
              <li>
                Manage the payable and receivable ledgers from the finance
                system (SAGE 50);
              </li>
              <li>
                Processing company-wide project-based month-end processes,
                preparing and submitting VAT returns, processing weekly bank
                reconciliations and year-end external audits;
              </li>
              <li>
                Administering and liaising monthly time and expense sheets and
                business travel with clients and contractors.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutcv;
