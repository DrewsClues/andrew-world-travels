import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Read_About from './read-modals/About_Page';

import Read_visa from './tip-modals/visas';
import Read_taxis from './tip-modals/taxis';
import Read_flights from './tip-modals/flights';
import Read_finding_accomodations from './tip-modals/finding_accomodations';
import Read_public_transportation from './tip-modals/public_transportation';

function Navigation_Bar() {


















  return (
    <Navbar expand="lg" className="page-navbar">
      <Container>
        <img className = "page_icon" src="Travel_icon_dark.png"></img> 
        <Navbar.Brand > Andrew's Travels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Read_About/>
            <NavDropdown title="Travel Tips" id="basic-nav-dropdown">
              <NavDropdown.Item ><Read_visa/></NavDropdown.Item>
              <NavDropdown.Item ><Read_flights/></NavDropdown.Item>
              <NavDropdown.Item ><Read_finding_accomodations/></NavDropdown.Item>
              <NavDropdown.Item ><Read_taxis/></NavDropdown.Item>
              <NavDropdown.Item ><Read_public_transportation/></NavDropdown.Item>



            </NavDropdown>


            <NavDropdown title="Countries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#korea-carousel">Korea</NavDropdown.Item>
              <NavDropdown.Item href="#japan-carousel">Japan</NavDropdown.Item>
              <NavDropdown.Item href="#taiwan-carousel">Taiwan</NavDropdown.Item>
              <NavDropdown.Item href="#usa-carousel">USA</NavDropdown.Item>
              <NavDropdown.Item href="#myanmar-carousel">Myanmar</NavDropdown.Item>
              <NavDropdown.Item href="#laos-carousel">Laos</NavDropdown.Item>
              <NavDropdown.Item href="#cambodia-carousel">Cambodia</NavDropdown.Item>
              <NavDropdown.Item href="#macau-carousel">Macau</NavDropdown.Item>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation_Bar;