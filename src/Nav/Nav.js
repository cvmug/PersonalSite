import React from 'react';
import './Nav.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import CatherineMugnai_Resume from '../CatherineMugnai_Resume.pdf';
import { Link } from 'react-scroll';

function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <Link
        className="name link-style"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        CM
      </Link>
      <div className="sections">
        <Link
          className='about link-style'
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          About
        </Link>
        <Link
          className='portfolio-nav link-style'
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          Portfolio
        </Link>
        <a className='resume' href={CatherineMugnai_Resume} target="_blank">
          Resume
        </a>
        <div className="toggle-container" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
