import React from 'react';
import './Portfolio.css';
import fitnesstracker_img from '../Images/fitnesstracker.png';
import trailfinder_img from '../Images/trailfinder.png';
import fetchfarm_img from '../Images/fetchfarm.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button onClick={clickHandler} className={`${hasPrev ? 'custom-arrow-prev' : 'hidden'}`}>
            <FiChevronLeft className="arrow-icon" />
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button onClick={clickHandler} className={`${hasNext ? 'custom-arrow-next' : 'hidden'}`}>
            <FiChevronRight className="arrow-icon" />
          </button>
        )}
      >
        <div className="project">
          <div className="project-description">
            <h1>Trail Finder</h1>
            <h3>
              <a href="https://github.com/cvmug/TrailFinder" style={{ fontWeight: "600" }}>
                GitHub</a> | <a href="https://trailfinder.netlify.app/" style={{ fontWeight: "600" }}>Netlify</a>
            </h3>
            <div className='project-content'>
              <p>
              Trail Finder is a web application dedicated to National Parks exploration and discovery.
              Users can access extensive information on parks, including locations, camping sites, visitor 
              facilities, and more. The application leverages the NPS API and Google Geolocation API to 
              fetch and display detailed park information, providing a comprehensive guide for outdoor 
              enthusiasts. The front-end UI is designed to enhance user navigation with responsive visual aids. 
              Trail Finder was constructed using key technologies such as JavaScript, React, Axios, HTML, CSS,
              along with the integration of the NPS API and Google Geolocation API.
              </p>
              <img src={trailfinder_img} alt="Project 0" className="project-image" />
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Fetch Tracker</h1>
            <h3>
              <a href="https://github.com/cvmug/FarmersMarketFrontend" style={{ fontWeight: "600" }}>
                GitHub</a> | <a href="https://calm-faun-13d879.netlify.app/" style={{ fontWeight: "600" }}> Netlify</a>
            </h3>
            <div className='project-content'>
              <p>
                Fitness Tracker is a comprehensive web application that utilizies an API to enable users to
                register and log in to create personalized workouts. With this app, registered users can easily
                create new activities to add to their routines, or select from an extensive list of existing
                activities. Additionally, all users can view a list of public routines and activities. The
                application was built using several technologies, including JavaScript, React, AJAX, React
                Router, Git, Express.js, Node.js, HTML, and CSS.
              </p>
              <img src={fetchfarm_img} alt="Project 1" className="project-image" />
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Fitness Farm</h1>
            <h3>
              <a href="https://github.com/cvmug/fitness-tracker-frontend" style={{ fontWeight: "600" }}>
                GitHub</a> | <a href="https://silly-torte-725ca7.netlify.app/" style={{ fontWeight: "600" }}>Netlify</a>
            </h3>
            <div className='project-content'>
              <p>
                Fitness Tracker is a comprehensive web application that utilizies an API to enable users to
                register and log in to create personalized workouts. With this app, registered users can easily
                create new activities to add to their routines, or select from an extensive list of existing
                activities. Additionally, all users can view a list of public routines and activities. The
                application was built using several technologies, including JavaScript, React, AJAX, React
                Router, Git, Express.js, Node.js, HTML, and CSS.
              </p>
              <img src={fitnesstracker_img} alt="Project 2" className="project-image" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
