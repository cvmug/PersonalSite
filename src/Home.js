import React from 'react'
import './Home.css'
import SocialLinks from './SocialLinks';

export default function Home() {
  return (
  <div className="bio">
  
    <div className="bio-text">

      <h1>Hello.</h1>

      <p>
        I'm a fullstack developer with a healthcare background based in New York.
        <br />
        <br />
        I'm passionate about combining my experience in healthcare and knowledge of web development to work on projects that improve people's lives.
        <br />
        <br />
        In addition to keeping up with current web development trends,  I also enjoy hiking, reading fantasy and sci-fi novels, knitting and crochet.
        <br />
        <br />
        <a href="mailto:catherinemugnai@gmail.com" style={{ fontWeight: "600" }}>Contact me </a>
        to get in touch.
      </p>
        <SocialLinks />

    </div>

    <img src="https://i.ibb.co/bF3mvhH/square-pfp.jpg" alt="profile-image" className="bio-image" />

  </div>
);
}

