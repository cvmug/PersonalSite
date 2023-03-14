import React, { useState } from 'react';
import './Nav.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import CatherineMugnai_Resume from '../CatherineMugnai_Resume.pdf';
import { Link } from 'react-scroll';

function Nav({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
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
      <div
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
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
        <div className="menu-container">
          <div
            className={`menu-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sections-mobile">
          <div className="toggle-container" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>
          <Link
            className="link-style"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="link-style"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <a
            className="link-style"
            href={CatherineMugnai_Resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>

        </div>
      )}

    </nav>

  );
}

export default Nav;