import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_public_transportation() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link className='text-dark' onClick={() => setLgShow(true)} >Using Public Transportation</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Using Public Transportation
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            This is mainly for American readers, but if you visit a city that has a metro system, don't be afraid of it! Don't get me wrong, as an 
            American from a car-dependent suburban desert, I was also intimidated by trains the first time I saw them, but I learned and so can you!
            As always, before departing on your trip, do your research a bit! 
            Is there a metro app you can download? Or will something like Google Maps suffice? Look up how to use the system. Most places 
            have transit cards you can load with money and just tap in and out of buses and trains, these are usually for sale for a few dollars at airports. 
            Buses can be a bit more tricky but if you have data on your phone they're much easier to figure out. To save yourself stress and confusion, it's
            always best to search this information in advance so you know what to do, Reddit can be a great resource. If you do find yourself lost on how to proceeed, 
            don't be afraid to find an information desk, ask someone in uniform, or politely ask a local person. 
            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_public_transportation;