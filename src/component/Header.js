import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from "react-bootstrap"

function Header() {
  const {activeLink, setActiveLink} = useState('home');
  const {scrolled, setScrolled} = useState(false);
  return (
    <>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon"> 
            <a href="#"><img src={} alt="" /></a>
            <a href="#"><img src={} alt="" /></a>
            <a href="#"><img src={} alt="" /></a>
            </div>
            <button type="button" className="vvd" onClick={() => console.log("contuct")}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
