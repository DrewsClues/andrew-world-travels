import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation_Bar() {


















  return (
    <Navbar expand="lg" className="page-navbar">
      <Container>
        <Navbar.Brand href="#home"> Andrew Thomas Travels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>


            <NavDropdown title="Countries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#korea-carousel">Korea</NavDropdown.Item>
              <NavDropdown.Item href="#japan-carousel">Japan</NavDropdown.Item>
              <NavDropdown.Item href="#taiwan-carousel">Taiwan</NavDropdown.Item>
              <NavDropdown.Item href="#usa-carousel">USA</NavDropdown.Item>
              <NavDropdown.Item href="#myanmar-carousel">Myanmar</NavDropdown.Item>
              <NavDropdown.Item href="#laos-carousel">Laos</NavDropdown.Item>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation_Bar;