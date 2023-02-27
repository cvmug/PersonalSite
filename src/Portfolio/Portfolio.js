import React from 'react';
import './Portfolio.css';
import fitnesstracker_img from '../images/fitnesstracker.png';
import strangersthings_img from '../images/strangersthings.png';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="project">
        <div className="project-description">
          <h2>Fitness Tracker</h2>
          <h3>
            <a href="https://github.com/cvmug/fitness-tracker-frontend" style={{ fontWeight: "600" }}>GitHub </a>
            <a href="https://silly-torte-725ca7.netlify.app/" style={{ fontWeight: "600" }}>Deployed site </a>
          </h3>
          <p>
            Fitness Tracker is a comprehensive web application 
            that utilizies an API to enable users to register 
            and log in to create personalized workouts. 
            With this app, registered users can easily create 
            new activities to add to their routines, or select 
            from an extensive list of existing 
            activities. Additionally, all users can view a list 
            of public routines and activities. The application 
            was built using several technologies, 
            including JavaScript, React, AJAX, React Router, 
            Git, Express.js, Node.js, HTML, and CSS.
          </p>
          <img src={fitnesstracker_img} alt="Project 1" className="project-image" />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
          <h2>Stanger's Things</h2>
          <h3>
            <a href="https://github.com/cvmug/strangersthings" style={{ fontWeight: "600" }}>GitHub </a>
            <a href="https://cheery-croquembouche-e3affd.netlify.app/" style={{ fontWeight: "600" }}>Deployed site </a>
          </h3>
          <p>
            Stranger's Things is a mock online buying and selling 
            plaform utilizing an API. Users are able to register 
            and log in to post new items for sale, message sellers, 
            and view received and sent messages on their profile. 
            All users are able to view items for sale. The application 
            was built using several technologies, including
            JavaScript, React, AJAX, React Router, Git, 
            HTML, CSS.
          </p>
          <img src={strangersthings_img} alt="Project 2" className="project-image" />
        </div>
      </div>
    </div>
  );
}
