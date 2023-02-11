import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'

function Nav() {
  return (
    <>
     <nav className="navbar navbar-expand">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Catherine Mugnai
          </Navbar.Brand>
        </Container>
      </Navbar>
      </nav>
    </>
        );
}

export default Nav;