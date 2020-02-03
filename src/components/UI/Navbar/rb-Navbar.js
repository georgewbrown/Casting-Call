import React from 'react';
import logo from '../../../assets/SVG/logo.svg';
import './rb-Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
    <Navbar bg="white">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="Casting Call logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link className="about"href="#home">about</Nav.Link>
       </Navbar.Collapse>
      </Navbar>
);
}

export default NavBar;