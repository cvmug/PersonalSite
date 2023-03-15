import React, { useState, useEffect } from 'react';
import './Nav.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import CatherineMugnai_Resume from '../CatherineMugnai_Resume.pdf';

function Nav({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <button
        className="name link-style"
        onClick={() => smoothScrollTo("home")}
      >
        CM
      </button>
      <div
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="sections">
        <button
          className='about link-style'
          onClick={() => smoothScrollTo("about")}
        >
          About
        </button>

        <button
          className='portfolio-nav link-style'
          onClick={() => smoothScrollTo("portfolio")}
        >
          Portfolio
        </button>
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
          <button
            className='about link-style'
            onClick={() => {
              smoothScrollTo("about");
              setIsOpen(false);
            }}          >
            About
          </button>
          <button
            className='portfolio-nav link-style'
            onClick={() => {
              smoothScrollTo("portfolio");
              setIsOpen(false);
            }}            
          >
            Portfolio
          </button>
          <a
            className="resume link-style"
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