import React from 'react';
import SocialLinks from "../SocialLinks";
import './Home.css';

export default function Home() {
return(
  <div className="home" id="home">
    <div>
      <div className='home-title'>
        <div className='title'>Hi, my name is</div>
        <div className='home-name'>Catherine Mugnai.</div>
      </div>
        <p className='home-text'>I'm a web developer focused on producing innovative and user-friendly websites and applications.</p>
        <p className='home-text'>
        <a className='home-text' href="mailto:catherinemugnai@gmail.com" style={{ fontWeight: "600" }}>Contact me </a> to get in touch.
        </p>
        <SocialLinks />
    </div>
  </div>
);
}

