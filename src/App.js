import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className='body'>
      <Home />
      </div>
    </div>
  );
}

export default App;
