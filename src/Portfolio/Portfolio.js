import React from 'react';
import './Portfolio.css';
import fitnesstracker_img from '../images/fitnesstracker.png';
import strangersthings_img from '../images/strangersthings.png';
import fetchfarm_img from '../images/fetchfarm.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Portfolio() {
  return (
    <div id="portfolio">
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
      <div className="project">
        <div className="project-description">
          <h1>Fetch Farm</h1>
          <h3>
            <a href="https://github.com/cvmug/FarmersMarketFrontend" style={{ fontWeight: "600" }}>GitHub</a> | <a href="https://calm-faun-13d879.netlify.app/" style={{ fontWeight: "600" }}>Netlify</a>
          </h3>
          <p>
            Fetch Farm is a mock ecommerce web application that aims to connect farmers with customers. 
            The web application allows users to create an account, browse products, add products to their 
            cart, and checkout. An admin only page exists for administrators to create, edit, and delete 
            existing products from the server. The application was built using several technologies, 
            including JavaScript, React, PostgreSQL, React Router, Git, Express.js, Node.js, HTML, CSS
          </p>
          <img src={fetchfarm_img} alt="Project 0" className="project-image" />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
          <h1>Fitness Tracker</h1>
          <h3>
            <a href="https://github.com/cvmug/fitness-tracker-frontend" style={{ fontWeight: "600" }}>GitHub</a> | <a href="https://silly-torte-725ca7.netlify.app/" style={{ fontWeight: "600" }}> Netlify</a>
          </h3>
          <p>
            Fitness Tracker is a comprehensive web application that utilizies an API to enable users to 
            register and log in to create personalized workouts. With this app, registered users can easily 
            create new activities to add to their routines, or select from an extensive list of existing 
            activities. Additionally, all users can view a list of public routines and activities. The 
            application was built using several technologies, including JavaScript, React, AJAX, React 
            Router, Git, Express.js, Node.js, HTML, and CSS.
          </p>
          <img src={fitnesstracker_img} alt="Project 1" className="project-image" />
        </div>
      </div>
      <div className="project">
        <div className="project-description">
          <h1>Stanger's Things</h1>
          <h3>
            <a href="https://github.com/cvmug/strangersthings" style={{ fontWeight: "600" }}>GitHub</a> | <a href="https://cheery-croquembouche-e3affd.netlify.app/" style={{ fontWeight: "600" }}>Netlify</a>
          </h3>
          <p>
            Stranger's Things is a mock online buying and selling plaform utilizing an API. Users are able 
            to register and log in to post new items for sale, message sellers, and view received and sent 
            messages on their profile. All users are able to view items for sale. The application was built 
            using several technologies, including JavaScript, React, AJAX, React Router, Git, HTML, and CSS.
          </p>
          <img src={strangersthings_img} alt="Project 2" className="project-image" />
        </div>
      </div>
    </Carousel>
    </div>
  );
}
