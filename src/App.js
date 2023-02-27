import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <div className='body'>
        <Home />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
