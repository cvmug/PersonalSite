import React from 'react';
import SocialLinks from "../SocialLinks";
import './Home.css';

export default function Home() {
  return (
    <section className="home home-background" id="home">
      <div className="content">
        <div className="intro">
          <div className="greeting">Hi, I'm Catherine</div>
        </div>
        <div className="contact-section">
          <a className='contact-link' href="mailto:catherinemugnai@gmail.com">
            Contact me
          </a>{" "}
          to get in touch.
        </div>
        <div className="social-links">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
