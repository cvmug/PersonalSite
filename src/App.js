import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import { loadFull } from 'tsparticles';

function App() {
  const [lightMode, setLightMode] = useState(false);

  function toggleLightMode() {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    loadFull({
      selector: '#particle-container',
    });
  }, []);

  return (
    <div className={`App ${lightMode ? 'light-mode' : ''}`}>
      <header className="App-header">
        <Nav lightMode={lightMode} toggleLightMode={toggleLightMode} />
      </header>
      <div className='body'>
        <div className="scroll-container">
          <Home />
          <About />
          <Portfolio />
        </div>
      </div>
      <div id="particle-container" className="particle-container"></div>
    </div>
  );
}

export default App;