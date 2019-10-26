import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from "./routes";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Modern See N Say</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav pullRight className="mr-auto">
            <LinkContainer to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/upload">
                <NavItem>Upload</NavItem>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />

    </div>
  );
}

export default App;
