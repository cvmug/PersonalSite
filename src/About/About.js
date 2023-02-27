import React from 'react'
import './About.css'

export default function About() {
  return (
  <div className="bio" id="about">
    <div className="bio-text">
      <h1>About me</h1>
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
        Here are a few technologies I’ve been working with recently:
        <ul className='technologies'>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
      </ul>
      </p>
    </div>
    <img src="./pfp.jpg" alt="profile-image" className="bio-image" />
  </div>
);
}

